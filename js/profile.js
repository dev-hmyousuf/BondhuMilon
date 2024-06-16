document.addEventListener('DOMContentLoaded', function() {
    // Tabs Functionality
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            tab.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });

    // "Know More" Button Functionality
    document.getElementById('know-more').addEventListener('click', function() {
        const moreInfo = document.querySelector('.more-info');
        const button = document.getElementById('know-more');
        if (moreInfo.classList.contains('open')) {
            moreInfo.classList.remove('open');
            button.textContent = 'Know More';
        } else {
            moreInfo.classList.add('open');
            button.textContent = 'Hide Details';
        }
    });

    // Back Button Functionality
    const backLink = document.getElementById('backLink');
    backLink.addEventListener('click', () => {
        window.location.href = 'index.html'; // Adjust the URL as needed
    });

    // Profile Picture Update
    const profilePic = document.querySelector(".profile-img");
    const inputFile = document.querySelector("#updateImg");

    inputFile.onchange = function() {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    };

    // Video Popup Functionality
    const videoPlayer = document.getElementById("video-player");
    const usersVideo = document.getElementById("usersVideo");

    function stopVideo() {
        videoPlayer.style.display = "none";
    }

    function playVideo(file) {
        usersVideo.src = file;
        videoPlayer.style.display = "block";
    }

    // Attach event listeners to video play buttons
    const playButtons = document.querySelectorAll('.playVidBtn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoFile = this.parentElement.querySelector('img').getAttribute('src').replace('pic3.png', 'vid1.mp4');
            playVideo(videoFile);
        });
    });

    // Close Video Popup
    document.querySelector('.closeVid-btn').addEventListener('click', stopVideo);
});
