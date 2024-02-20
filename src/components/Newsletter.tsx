import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState, useEffect } from "react";
import { Chart } from 'chart.js/auto';
import 'chartjs-chart-wordcloud';

interface APIResponse {
  daily_sentiment_rate: Record<string, number>;
  global_sentiment_rate: number;
  negative_wordcloud: string; // Assuming it's a base64 encoded image string
  positive_wordcloud: string; // Assuming it's a base64 encoded image string
  averageSentiment: number; // Add the new property
}

export const Newsletter: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string>("");
  const [showVis, setShowVis] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<APIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Add loading state

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setError(null); // Clear any previous errors
      setApiResponse(null); // Clear previous response while fetching
      setShowVis(false); // Hide the visualization until new data is available

      // Fetch data from the API
      const response = await fetch(`http://127.0.0.1:5000/analyse_feedback_video?videoLink=${videoLink}`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Parse the response JSON
      const data = await response.json() as APIResponse;
      setApiResponse(data);
      setShowVis(true);

      // Calculate average daily sentiment
      const sentimentSum = Object.values(data.daily_sentiment_rate).reduce((acc, value) => acc + value, 0);
      const averageSentiment = sentimentSum / Object.keys(data.daily_sentiment_rate).length;

      // Update state with additional calculated data
      setApiResponse({
        ...data,
        averageSentiment,
      });
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  const VedioAnalyst: React.FC = () => {
    const [chartRef, setChartRef] = useState<any>(null);

    const { daily_sentiment_rate, global_sentiment_rate, negative_wordcloud, positive_wordcloud } = apiResponse || {};

    useEffect(() => {
      // Create the chart when the API returns data
      if (Object.keys(daily_sentiment_rate ? daily_sentiment_rate : {}).length > 0 && chartRef) {
        const ctx = chartRef.getContext('2d');

        // Get dates and daily sentiment rates from the data
        const dates = Object.keys(daily_sentiment_rate ? daily_sentiment_rate : {});
        const sentimentRates = Object.values(daily_sentiment_rate ? daily_sentiment_rate : {});

        // Create the chart
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                label: 'Daily Sentiment Rate',
                data: sentimentRates,
                borderColor: 'blue',
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: 'category',
                labels: dates,
              },
              y: {
                min: 0,
                max: 1,
              },
            },
          },
        });
      }
    }, [daily_sentiment_rate, chartRef]);

    return (
      <section id="about" className="container py-24 sm:py-32">
        <div className="bg-muted/50 border rounded-lg py-12">
          <canvas ref={(ref) => setChartRef(ref)} />

          {/* Display a loading spinner while waiting for API response */}
          {!showVis && <p>Loading...</p>}

          {negative_wordcloud && (
            <div>
              <h4>Wordcloud des mots négatifs</h4>
              <img
                src={`data:image/png;base64,${negative_wordcloud}`}
                alt="Wordcloud des mots négatifs"
              />
            </div>
          )}

          {positive_wordcloud && (
            <div>
              <h4>Wordcloud des mots positifs</h4>
              <img
                src={`data:image/png;base64,${positive_wordcloud}`}
                alt="Wordcloud des mots positifs"
              />
            </div>
          )}

          {global_sentiment_rate !== undefined && (
            <p className="text-xl text-muted-foreground mt-4">
              {global_sentiment_rate >= 0.5
                ? 'En général, les sentiments sont plutôt positifs...'
                : `En général, les sentiments sont plutôt négatifs avec un taux de ${global_sentiment_rate}`}
            </p>
          )}
        </div>
      </section>
    );
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Entrez le lien de la vidéo YouTube"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="video-link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <Button type="submit">Analyser</Button>
        </form>

        {/* ... existing content ... */}

      </div>

      <hr className="w-11/12 mx-auto" />
      {showVis && <VedioAnalyst />}

    </section>
  );
};
