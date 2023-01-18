import './styles.css';
import { CardItem } from './components/CardItem';

function HomeApp() {
  return (
    <div>
      <div className="cards">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default HomeApp;
