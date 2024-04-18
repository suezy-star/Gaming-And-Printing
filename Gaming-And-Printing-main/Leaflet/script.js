const movies = [
    {
        id: 'movie1',
        title: 'Movie 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'assets/images/movie1.jpg',
        likes: 0
    },
    {
        id: 'movie2',
        title: 'Movie 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'assets/images/movie2.jpg',
        likes: 0
    },
    {
        id: 'movie3',
        title: 'Movie 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'assets/images/movie3.jpg',
        likes: 0
    }
];

const movieContainer = document.getElementById('movie-container');

function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.id = movie.id;

    const imageElement = document.createElement('img');
    imageElement.src = movie.image;
    imageElement.alt = movie.title;

    const titleElement = document.createElement('h2');
    titleElement.textContent = movie.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = movie.description;

    const likesElement = document.createElement('p');
    likesElement.id = `${movie.id}-likes`;
    likesElement.textContent = `Likes: ${movie.likes}`;

    const likeButtonElement = document.createElement('button');
    likeButtonElement.textContent = 'Like';
    likeButtonElement.addEventListener('click', () => {
        movie.likes++;
        likesElement.textContent = `Likes: ${movie.likes}`;
    });

    movieElement.appendChild(imageElement);
    movieElement.appendChild(titleElement);
    movieElement.appendChild(descriptionElement);
    movieElement.appendChild(likesElement);
    movieElement.appendChild(likeButtonElement);

    return movieElement;
}

movies.forEach(movie => {
    const movieElement = createMovieElement(movie);
    movieContainer.appendChild(movieElement);
});
