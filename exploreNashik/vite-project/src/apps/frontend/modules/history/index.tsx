import { Helmet } from 'react-helmet-async';
import YearlyHistory from './YearlyHistory';

export default function HistoryIndex() {
  return (
    <>
      <Helmet>
        <title>History of Nashik | Explore Nashik</title>

        <meta
          name="description"
          content="Read about the rich history, culture and heritage of Nashik city."
        />
      </Helmet>

      <YearlyHistory />
    </>
  );
}