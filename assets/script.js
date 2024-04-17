console.log("Ready to DOM! 🚀");

const imgUrl = "https://source.unsplash.com/random/200x200?food&sig=";

const body = document.querySelector("body");
const container = document.querySelector("#posts-container");

body.style.background =  '#d1e9ff';

posts.forEach((post, i) => {
  const card = document.createElement('div');
  card.classList.add('card-container');

  // img section
  const imageSection = createImageSection(i);


  // text section
  const textSection = createTextSection(post);

  card.appendChild(imageSection);
  card.appendChild(textSection);

  container.appendChild(card);
  
})

function createImageSection(i) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  const img = document.createElement('img');
  img.src = `${imgUrl}${i}`;

  imageContainer.appendChild(img);

  return imageContainer;
}

function createTextSection(post) {
  const textContainer =  document.createElement('div');
  textContainer.classList.add('text-container');

  const title = document.createElement('h3');
  title.textContent = post.title;

  const body = document.createElement('p');
  body.textContent = post.body;

  textContainer.appendChild(title);
  textContainer.appendChild(body);
  return textContainer;
}
