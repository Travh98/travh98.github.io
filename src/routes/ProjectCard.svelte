<script>
    let title = 'Project Name';
    let date = 'today';
    let taglist = ['HTML', 'CSS', 'Typescript', 'Svelte'];
</script>

<style>
    .card {
        border-radius: 1rem;
        background-color: rgb(25, 25, 25);
    }
    #title {
        float: left;
    }
    #date {
        float: right;
    }
</style>

<div class='card'>
    <h2 id='title'>{title}</h2>
    <h2 id='date'>{date}</h2>
</div>

