const url = document.getElementById("url");
const nameInput = document.getElementById("name");
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const categoryList = document.getElementById("category-list");
const categoryNames = document.querySelectorAll(".category-name");
const closeListBtn = document.getElementById("close-list-button");
const closeFormBtn = document.getElementById("close-form-button");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

function isValidBookmark(bookmark) {
  return (
    bookmark &&
    typeof bookmark === "object" &&
    typeof bookmark.name === "string" &&
    typeof bookmark.category === "string" &&
    typeof bookmark.url === "string"
  );
}

function getBookmarks() {
  const rawBookmarks = localStorage.getItem("bookmarks");

  if (!rawBookmarks) {
    return [];
  }

  try {
    const parsedBookmarks = JSON.parse(rawBookmarks);

    if (!Array.isArray(parsedBookmarks)) {
      return [];
    }

    if (!parsedBookmarks.every(isValidBookmark)) {
      return [];
    }

    return parsedBookmarks;
  } catch (error) {
    return [];
  }
}

function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function reset() {
  nameInput.value = "";
  url.value = "";
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function setCategoryName(text) {
  categoryNames.forEach((element) => {
    element.innerText = text;
  });
}

function renderCategoryList(category) {
  const bookmarks = getBookmarks().filter(
    (bookmark) => bookmark.category === category,
  );

  if (bookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  const radioName = "bookmark-choice";
  categoryList.innerHTML = bookmarks
    .map(
      (bookmark) =>
        `<div class="bookmark-item">
          <input type="radio" id="${bookmark.name}" name="${radioName}" value="${bookmark.name}" />
          <label for="${bookmark.name}">
            <a href="${bookmark.url}">${bookmark.name}</a>
          </label>
        </div>`,
    )
    .join("");
}

addBookmarkBtnForm.addEventListener("click", (event) => {
  event.preventDefault();

  const bookmarks = getBookmarks();
  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: url.value,
  };

  bookmarks.push(newBookmark);
  saveBookmarks(bookmarks);
  reset();
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", displayOrCloseForm);

addBookmarkBtn.addEventListener("click", () => {
  setCategoryName(categoryDropdown.value);
  displayOrCloseForm();
});

closeListBtn.addEventListener("click", displayOrHideCategory);

viewCategoryBtn.addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;
  setCategoryName(selectedCategory);
  renderCategoryList(selectedCategory);
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="bookmark-choice"]:checked',
  );
  const selectedCategory = categoryDropdown.value;

  if (!selectedRadio) {
    return;
  }

  const selectedName = selectedRadio.value;
  const updatedBookmarks = getBookmarks().filter(
    (bookmark) =>
      !(
        bookmark.category === selectedCategory && bookmark.name === selectedName
      ),
  );

  saveBookmarks(updatedBookmarks);
  renderCategoryList(selectedCategory);
});
