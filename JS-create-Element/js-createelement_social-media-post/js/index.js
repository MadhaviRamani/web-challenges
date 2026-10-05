console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// create a new article element
const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);
newPost.innerHTML = `new post innerHTML`;

const newPostcontent = document.createElement("p");
newPostcontent.classList.add("post__content");
newPostcontent.textContent = "This is a new post content!";
newPost.append(newPostcontent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.append(newPostFooter);
newPostFooter.innerHTML = `<span class="post__username">@newuser</span>
        <button type="button" class="post__button" data-js="like-button">
          ♥ Like
        </button>`;