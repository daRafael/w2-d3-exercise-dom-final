console.log("Ready to DOM! 🚀");

const imgUrl = "https://source.unsplash.com/random/200x200?food&sig=";

const container = document.querySelector("#posts-container");

posts.forEach((post, i) => {
  const card = document.createElement("div");
  card.classList.add("card-container");

  const imgSection = buildImgSection(i);
  const textSection = buildTextSection(post);

  card.appendChild(imgSection);
  card.appendChild(textSection);
  container.appendChild(card);
});

function buildImgSection(i) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `${imgUrl}${i}`;

  imgContainer.appendChild(img);
  return imgContainer;
}

function buildTextSection(post) {
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  const title = document.createElement("h3");

  // capitalize the post title
  const capitalizedTitle =
    post.title.charAt(0).toUpperCase() + post.title.slice(1);
  title.innerText = capitalizedTitle;
  const body = document.createElement("p");
  body.innerText = post.body;

  textContainer.appendChild(title);
  textContainer.appendChild(body);
  return textContainer;
}
