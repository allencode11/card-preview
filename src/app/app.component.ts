import { Component } from '@angular/core';

type cardContent = {
  imgSrc: string,
  title: string,
  content: string,
  btnContent: string,
  color: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: cardContent[] = [
    {
      imgSrc: '../../../assets/images/sedan.png',
      title: 'sedans',
      content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      btnContent: 'Learn More',
      color: '#E28625'
    },
    {
      imgSrc: '../../../assets/images/suv.png',
      title: 'suvs',
      content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      btnContent: 'Learn More',
      color: '#006971'
    },
    {
      imgSrc: '../../../assets/images/luxury.png',
      title: 'luxury',
      content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      btnContent: 'Learn More',
      color: '#004140'
    },
  ]
}
