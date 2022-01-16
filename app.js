const pgSection = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

const menuCta = document.getElementById('menu-cta');
const exitCta = document.getElementById('exit-cta');
const nav = document.querySelector('nav');
const heroPlay = document.getElementById('hero-img');
const ytVideo = document.getElementById('yt-video');

const videoBtn = document.getElementById('video-btn');
const photoBtn = document.getElementById('photography-btn');
const socialBtn = document.getElementById('social-btn');
const prBtn = document.getElementById('pr-btn');
const radioBtn = document.getElementById('radio-btn');

const btnContainer = document.getElementById('btn-container');
const btns = btnContainer.getElementsByClassName('btns');
const mediaBtnContainer = document.getElementById('media-btns-container');
const mediaBtns = mediaBtnContainer.getElementsByClassName('media-btns');
const ellipseContainer = document.getElementById('ellipse-container');
const ellipseBtns = ellipseContainer.getElementsByClassName('el-btn-container');

const imgPanel = document.getElementById('img-panel');
const textPanel = document.getElementById('text-panel');

const sideBtns = document.querySelectorAll('#ellipse-container .el-btn-container');

// 0
// 751
// 1502
// 2253

// states

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		let current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

for (let i = 0; i < ellipseBtns.length; i++) {
	ellipseBtns[i].addEventListener('click', function() {
		let current = document.getElementsByClassName('ellipse-active');
		current[0].className = current[0].className.replace(' ellipse-active', '');
		this.className += ' ellipse-active';
	});
}

for (let i = 0; i < mediaBtns.length; i++) {
	mediaBtns[i].addEventListener('click', function() {
		let current = document.getElementsByClassName('media-active');
		current[0].className = current[0].className.replace(' media-active', '');
		this.className += ' media-active';
	});
}

window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop >= 0) {
		navLi.forEach((li) => {
			li.classList.remove('active');
		});
		sideBtns.forEach((el) => {
			el.classList.remove('ellipse-active');
		});
		navLi[3].classList.add('active');
		sideBtns[0].classList.add('ellipse-active');
	}
	if (document.documentElement.scrollTop >= 751) {
		navLi.forEach((li) => {
			li.classList.remove('active');
		});
		sideBtns.forEach((el) => {
			el.classList.remove('ellipse-active');
		});
		navLi[0].classList.add('active');
		sideBtns[1].classList.add('ellipse-active');
	}
	if (document.documentElement.scrollTop >= 1502) {
		navLi.forEach((li) => {
			li.classList.remove('active');
		});
		sideBtns.forEach((el) => {
			el.classList.remove('ellipse-active');
		});
		navLi[1].classList.add('active');
		sideBtns[2].classList.add('ellipse-active');
	}
	if (document.documentElement.scrollTop >= 2253) {
		navLi.forEach((li) => {
			li.classList.remove('active');
		});
		sideBtns.forEach((el) => {
			el.classList.remove('ellipse-active');
		});
		navLi[2].classList.add('active');
		sideBtns[3].classList.add('ellipse-active');
	}
});

btns[0].addEventListener('click', () => {
	sideBtns.forEach((sb) => {
		sb.classList.remove('ellipse-active');
	});
	sideBtns[1].classList.add('ellipse-active');
});

btns[1].addEventListener('click', () => {
	sideBtns.forEach((sb) => {
		sb.classList.remove('ellipse-active');
	});
	sideBtns[2].classList.add('ellipse-active');
});

btns[2].addEventListener('click', () => {
	sideBtns.forEach((sb) => {
		sb.classList.remove('ellipse-active');
	});
	sideBtns[3].classList.add('ellipse-active');
});

btns[3].addEventListener('click', () => {
	sideBtns.forEach((sb) => {
		sb.classList.remove('ellipse-active');
	});
	sideBtns[0].classList.add('ellipse-active');
});

// CTA

window.addEventListener('resize', () => {
	if (window.innerWidth >= 1024) {
		nav.classList.remove('navbar-toggle');
	}
});

heroPlay.addEventListener('click', () => {
	heroPlay.classList.add('hide-item');
	ytVideo.style.display = 'block';
});

menuCta.addEventListener('click', (e) => {
	e.preventDefault();
	nav.classList.toggle('navbar-toggle');
});

exitCta.addEventListener('click', (e) => {
	nav.classList.toggle('navbar-toggle');
});

videoBtn.addEventListener('click', (e) => {
	e.preventDefault();
	imgPanel.src = './img/video-png.png';
	textPanel.innerHTML =
		'A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter.';
});

photoBtn.addEventListener('click', (e) => {
	e.preventDefault();
	imgPanel.src = './img/photo-png.png';
	textPanel.innerHTML =
		'Shots posted on Facebook and Instagram every day inspired thousands of entries. We reacted to the storyline as it developed in real time, selecting and treating the next image according to the day’s winning scene.';
});

socialBtn.addEventListener('click', (e) => {
	e.preventDefault();
	imgPanel.src = './img/social-png.png';
	textPanel.innerHTML =
		'The complete movie storyboard showcased the entire story, completely inspired by stunning images captured in the Whitsundays, with all 20 winning scenes accompanying the images.';
});

prBtn.addEventListener('click', (e) => {
	e.preventDefault();
	imgPanel.src = './img/pr-png.png';
	textPanel.innerHTML =
		'We enlisted the help of Craig Pearce as script supervisor, who was tasked with choosing the winner each day to ensure the story flowed properly, and providing daily writing tips to encourage people to take part.';
});

radioBtn.addEventListener('click', (e) => {
	e.preventDefault();
	imgPanel.src = './img/radio-png.png';
	textPanel.innerHTML =
		'Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.';
});
