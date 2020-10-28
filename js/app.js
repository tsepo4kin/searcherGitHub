// init github 
const github = new Github();

// init UI
const ui = new UI();

// Init search input
const searchInput = document.getElementById('searchUser');

// Add event listener
searchInput.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;	 

	if(userText	!== '') {
		ui.profilePreLoad();

		// Make http request
		github.getUser(userText)
			.then(user => {
				if(user.message === 'Not Found') {
					// show alert
					ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
					ui.clearProfile();
				} else {
					// show profile
					ui.showProfile(user);
					ui.clearAlert();
				}

				return user;
			})
			.then(github.getRepos.bind(github))
			.then(repos => {
				console.log(repos);
				ui.showRepos(repos);
			})
			.catch (err => 	console.log(err));

	} else {
		//clear profile
		ui.clearProfile();
	}
})