let post_publish = function (post_in_data) {
    let container = document.createElement('div')
    let post_start = document.body.appendChild(container)
    if (document.getElementById('script_start').nextSibling) {
        let parent_post_start = post_start.parentNode
        parent_post_start.insertBefore(post_start, document.getElementById('script_start').nextSibling)}
    let post_text = post_start.appendChild(document.createElement('div'));
    post_text.textContent = post_in_data.title + ' ' + post_in_data.body;
    let post_autor = post_start.appendChild(document.createElement('p'));
    post_autor.style.textAlign = 'right';
    post_autor.innerHTML = post_in_data.id;
    let post_edit = post_start.appendChild(document.createElement('button'))
    post_edit.innerHTML = 'Edit';
    post_edit.addEventListener('click', function (){
        let parent_post_edit = post_edit.parentNode;
        parent_post_edit.style.display = 'none';
        let edit_input = parent_post_edit.parentNode
        let edit_div = document.createElement('div')
        edit_input.insertBefore(edit_div, parent_post_edit)
        let edit_input_field = edit_div.appendChild(document.createElement('input'))
        edit_input_field.type = 'text'
        edit_input_field.style.width = '500px'
        edit_input_field.value = post_start.firstChild.textContent
        let save_edit_btn = edit_div.appendChild(document.createElement('button'))
        save_edit_btn.innerHTML = 'save changes'
        save_edit_btn.addEventListener('click', function (){
            parent_post_edit.style.display = '';
            post_start.firstChild.innerHTML = edit_input_field.value
            edit_div.remove()
        })
        let decline_edit_btn = edit_div.appendChild(document.createElement('button'))
        decline_edit_btn.innerHTML = 'decline changes'
        decline_edit_btn.addEventListener('click', function (){
            parent_post_edit.style.display = '';
            edit_div.remove()
        })
    })
    let post_delete = post_start.appendChild(document.createElement('button'))
    post_delete.innerHTML = 'Delete'
    post_delete.addEventListener('click' , function() {post_delete.parentElement.remove()})
    let post_comment = post_start.appendChild(document.createElement('button'))
    post_comment.innerHTML = 'Leave comment'
    post_comment.addEventListener('click', function (){
        post_comment.style.display = 'none'
        let post_comment_div = post_start.appendChild(document.createElement('div'))
        post_start.insertBefore(post_comment_div, post_edit)
        let post_comment_input = post_comment_div.appendChild(document.createElement('input'))
        post_comment_input.type = 'text'
        post_comment_input.value = 'Enter your comment here'
        let post_comment_autor_input = post_comment_div.appendChild(document.createElement('input'))
        post_comment_autor_input.type = 'text'
        post_comment_autor_input.value = 'Enter your nickname here'
        let post_comment_confirm = post_comment_div.appendChild(document.createElement('button'))
        post_comment_confirm.innerHTML = 'Confirm'
        post_comment_confirm.addEventListener('click', function (){
            let post_comment_print = post_comment_input.value
            let post_comment_autor = post_comment_autor_input.value
            post_comment_div.innerHTML = ''
            post_comment_div.textContent = post_comment_print + '  -  ' + post_comment_autor
            post_comment.style.display = ''
        })
        let post_comment_decline = post_comment_div.appendChild(document.createElement('button'))
        post_comment_decline.innerHTML = 'Decline'
        post_comment_decline.addEventListener('click', function (){
            post_comment.style.display = ''
            post_comment_div.remove()
        })
    })
}

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json',
    type: 'GET',
    data: {
    },
    success: function(data) {
        for (let i = 0; i < data.length; i++) {
            post_publish(data[i])
        }
        let btn_save = document.getElementById('btn_save_post')
        btn_save.addEventListener('click', function() {
            let new_post_data = {
                "title" : document.getElementById('post_title_input').value,
                "body" : document.getElementById('post_body_input').value,
                "id" : document.getElementById('post_autor_input').value
            }
            post_publish(new_post_data)
        })
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + " " + errorThrown);
    }
})