<template>
    <div class="modal-backdrop">
        <div class="modal-content">
            <p>Modal content</p>
        </div>
    </div>
</template>

<style>
.modal-backdrop{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.modal-content{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    text-align: center;
}
</style>