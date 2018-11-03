import { Injectable } from '@angular/core';
import { CakeCard, Card, DescriptionCard, Employee, Reviewer } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getReviewers (): Reviewer[] {
    return [
      {
        name: `Сергей Зверев`,
        avatar: null,
        msisdn: `+375299635874`,
        review: `Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa.`,
        social: [
          {
            type: `Vkontakte`,
            link: `www.vk.com/pasha`
          },
          {
            type: `Instagram`,
            link: `www.insta.com/pasha`
          }
        ]
      },
      {
        name: `Алексей Громыко`,
        avatar: null,
        msisdn: `+375299635874`,
        review: `Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin.`,
        social: [
          {
            type: `Vkontakte`,
            link: `www.vk.com/alex`
          }
        ]
      },
      {
        name: `Оксана Старовойтова`,
        avatar: null,
        msisdn: `+375299635874`,
        review: `Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. Asymmetrical viral letterpress, McSweeney's seitan 3 wolf moon drinking vinegar sartorial.`,
        social: [
          {
            type: `Vkontakte`,
            link: `www.vk.com/pasha`
          }
        ]
      },
      {
        name: `Екатерина Толмач`,
        avatar: null,
        msisdn: `+375299635874`,
        review: `Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats..`,
        social: [
          {
            type: `Facebook`,
            link: `www.fb.com/pasha`
          },
          {
            type: `Instagram`,
            link: `www.insta.com/pasha`
          }
        ]
      }
    ];
  }

  getEmployees (): Employee[] {
    return [
      {
        avatar: null,
        name: `Мария Шарапова`,
        position: `Главный кондитер`
      },
      {
        avatar: `картинка, которой нетути((`,
        name: `Мария Шарапова`,
        position: `Главный кондитер`
      },
      {
        avatar: 'null',
        name: `Мария Шарапова`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
      {
        avatar: null,
        name: `Евгений Смирнов`,
        position: `Главный кондитер`
      },
    ];
  }

  getCategories (): Card[] {
    return [
      {
        title: 'Детские торты',
        color: '#D8E9FA'
      },
      {
        title: 'Свадебные торты',
        color: '#DBD8FA'
      },
      {
        title: 'Праздничные торты',
        color: '#D8FAF1'
      },
      {
        title: 'На день рождения',
        color: '#EFFAD8'
      },
      {
        title: 'Candy bar и пироженные',
        color: '#FAD8DE'
      },
    ];
  }

  getTopSales (): CakeCard[] {
    return [
      {
        title: 'Торт корабль',
        price: 500,
        minWeight: 2
      },
      {
        title: 'Торт корабль',
        price: 900,
        minWeight: 3
      },
      {
        title: 'Торт корабль',
        price: 1200,
        minWeight: 1
      },
      {
        title: 'Торт корабль',
        price: 70,
        minWeight: 1
      },
    ];
  }

  getWhyUsExplain (): DescriptionCard[] {
    return [
      {
        title: 'Натуральные ингредиенты',
        description: 'Ваш торт на 100% будет состоять из натуральных ингредиентов и продуктов без добавок. Он безопасен для здоровья взрослых и детей. Это подтверждают сертификаты санитарных и технологических норм. Эти документы мы кладем с тортом, поэтому вы их легко предоставите в кафе или ресторан (если потребуется)'
      },
      {
        title: 'Прекрасный внешний вид',
        description: 'В вашем распоряжении каталог из более тысячи тортов разных стилей и цветов. Торты одноярусные, двухъярусные, трехъярусные и многоярусные. Торты с фигурками, цветами, фруктами, ягодами, орехами. Гости будут в восторге и полном изумлении от красоты вашего торта. '
      },
      {
        title: 'Неповторимый вкус',
        description: 'Наполнитель вашего торта будет приготовлен по уникальной рецептуре, которая совершенствуется вот уже 23 года. Вы насладитесь вкусом торта, получите хорошее настроение и удовольствие '
      },
      {
        title: 'Без предоплаты',
        description: 'Вы будете спокойны, потому что вам не нужно покупать «кота в мешке». Вы платите за торт курьеру только после доставки. К оплате принимаем наличные или безналичные деньги (VISA, MASTERCARD, БЕЛКАРТ, ЕРИП).'
      },
      {
        title: '100% гарантия качества',
        description: 'Мы гарантируем, что торт полностью удовлетворит ваши ожидания или ВЫ НЕ ЗАПЛАТИТЕ ЗА НЕГО И РУБЛЯ'
      },
      {
        title: 'Низкая цена',
        description: 'Стоимость одного килограмма торта от 25,8 рублей. Цена зависит от наполнителя (начинки), внешнего оформления (голый торт, кремовый торт, мастичный торт и прочие варианты) и элементов декора'
      },
      {
        title: 'Быстрое изготовление',
        description: 'Готовим торты на заказ за 2–3 дня. За дополнительную плату +50% сделаем торт за 4 часа (подробности предложения у кондитера).'
      },
      {
        title: 'Спецдоставка',
        description: 'Надежно упакуем в коробку. Быстро и безопасно доставим ваш торт по Минску или Минскому району на специальном автомобиле-рефрижераторе'
      }
    ];
  }

  getDocuments (): Card[] {
    return [
      {
        title: `Сертификат продукции собственного производства`,
        imageSrc: `certificate.jpg`
      },
      {
        title: `Сертификат продукции собственного производства`,
        imageSrc: `certificate.jpg`
      },
      {
        title: `Сертификат продукции собственного производства`,
        imageSrc: `certificate.jpg`
      },
      {
        title: `Сертификат продукции собственного производства`,
        imageSrc: `certificate.jpg`
      }
    ];
  }
}
