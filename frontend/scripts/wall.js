let commentToggleButtons = document.getElementsByClassName('comment-dropdown-button');

for (button of commentToggleButtons){

    let chevronIcon = button.firstChild;
    let parent = button.parentElement;
    let commentsContainer = parent.nextElementSibling;
    
    // rotate chevron  
    const rotate = () => {

            console.log(chevronIcon.classList);
        if (chevronIcon.classList.contains('rotate')){
            chevronIcon.classList.remove('rotate');
        }
        else{
            chevronIcon.classList.add('rotate');
        }
    }

    // Show/Hide comment section
    const show = () => {
        if (commentsContainer.classList.contains('dropdown')){
            commentsContainer.classList.remove('dropdown');
        }
        else{
            commentsContainer.classList.add('dropdown');
        }  
    }

    //trigger both functions when chevron is clicked
        button.addEventListener("click", () =>{
            rotate();
            show();
        });
}  
    
    