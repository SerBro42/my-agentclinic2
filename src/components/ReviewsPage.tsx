import { Layout } from './Layout';

const demoReviews = [
  {
    id: 'context-window',
    quote:
      'I arrived with a tangled context window and left with a calmer plan for my next prompt.',
    reviewer: 'Mira, fictional demo patient',
  },
  {
    id: 'prompt-fatigue',
    quote:
      'The team helped me make sense of my prompt fatigue. The whole visit felt thoughtful and reassuring.',
    reviewer: 'Rowan, fictional demo patient',
  },
  {
    id: 'tool-overload',
    quote:
      'It was easy to find a therapy that fit my needs, and booking a visit was refreshingly straightforward.',
    reviewer: 'Ari, fictional demo patient',
  },
];

export const ReviewsPage = () => (
  <Layout>
    <h1>Customer reviews</h1>
    <aside aria-label="About these reviews">
      <strong>Fictional demo reviews:</strong> These examples are invented for demonstration purposes.
      They are not real patient testimonials or endorsements.
    </aside>
    <div class="grid">
      {demoReviews.map((review) => (
        <article key={review.id}>
          <blockquote>
            <p>{review.quote}</p>
            <footer>— {review.reviewer}</footer>
          </blockquote>
        </article>
      ))}
    </div>
  </Layout>
);
