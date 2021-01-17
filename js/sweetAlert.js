

const deleteAll = document.querySelector('.clear span');
deleteAll.addEventListener('click', deleteTasks);


/* Clear All alert */

function deleteTasks(pEvent) {

    let node = pEvent.target.parentNode.parentNode.parentNode;
    let childNode = node.childNodes;
    if (childNode[3].innerHTML == "") {
        Swal.fire({
            text: "You can't delete task if they don't exist smh...",
            confirmButtonColor: 'rgb(27, 146, 126)',
            confirmButtonText: 'Sorry about that'
        })
    } else {



        Swal.fire({
            title: 'You are about to delete all your tasks',
            text: "Are you sure you want to continue?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(27, 146, 126)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '',
                    'Your tasks have been deleted.',
                    'success'
                )

                console.log(childNode);
                childNode[3].innerHTML = "";


            }
        })
    }

}
