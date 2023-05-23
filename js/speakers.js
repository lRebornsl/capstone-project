const speakers = document.querySelector('.speakers__cont');

const speakersData = [
  {
    name: 'Yochai Benkler',
    image: 'images/speaker_01.png',
    pro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law school',
    text: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Kilnam Chon',
    image: 'images/speaker_02.png',
    pro: 'Professional of A.I tech',
    text: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital conference. In 2012, he was inducted into the inaugural class of the Internet Society´s ISOC.',
  },
  {
    name: 'SohYeong Noh',
    image: 'images/speaker_03.png',
    pro: 'Director of Art Centre Nabi and a board member of CC Korea',
    text: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    image: 'images/speaker_04.png',
    pro: 'President of Young Pirates of Europe',
    text: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda´s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },
  {
    name: 'Lila Tretikov',
    image: 'images/speaker_05.png',
    pro: 'Executive Director of the Wikimedia Foundation',
    text: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Ryan Merkley',
    image: 'images/speaker_06.png',
    pro: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    text: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

for (let i = 0; i < speakersData.length; i += 1) {
  const element = document.createElement('div');
  if (i < 2) {
    element.classList.add('speakers__card', 'flex');
    element.innerHTML = `
      <div class="speakers__img"><img class="w-100" src="${speakersData[i].image}" alt="Speaker"></div>
      <div class="speakers__desc">
        <div class="speakers__desc--name"><h2>${speakersData[i].name}</h2></div>
        <div class="speakers__desc--pro"><p>${speakersData[i].pro}</p></div>
        <hr>
        <div class="speakers__desc--data"><p>${speakersData[i].text}</p></div>
      </div>
    `;
  } else {
    element.classList.add('speakers__card', 'active', 'flex');
    element.innerHTML = `
      <div class="speakers__img"><img class="w-100" src="${speakersData[i].image}" alt="Speaker"></div>
      <div class="speakers__desc">
        <div class="speakers__desc--name"><h2>${speakersData[i].name}</h2></div>
        <div class="speakers__desc--pro"><p>${speakersData[i].pro}</p></div>
        <hr>
        <div class="speakers__desc--data"><p>${speakersData[i].text}</p></div>
      </div>
    `;
  }

  speakers.appendChild(element);
}

const moreBtn = document.querySelector('.speakers__button');
const active = document.querySelectorAll('.active');
const aux = document.getElementById('sp_button');

moreBtn.addEventListener('click', () => {
  if (aux.classList.contains('more') === false) {
    active.forEach((speaker) => {
      speaker.classList.remove('active');
    });
    aux.classList.add('more');
    aux.innerHTML = '<button>LESS <img src="icons/arrow_up.png" alt="Arrow"></button>';
  } else {
    active.forEach((speaker) => {
      speaker.classList.add('active');
    });
    aux.classList.remove('more');
    aux.innerHTML = '<button>MORE <img src="icons/arrow_down.png" alt="Arrow"></button>';
  }
});