import Playlist from './playlist.js'

const PlayInfo = (_ => {

    const state = {
        songsLength: 0,
        isPlaying: false
    }

    // cache the DOM
    const playerCountEl = document.querySelector(".player__count")
    const playerTriggerEl = document.querySelector(".player__trigger")

    const init = _ => {
        render()
        listeners()
    }

    const listeners = _ => {
        playerTriggerEl.addEventListener("click", _ => {
            state.isPlaying = state.isPlaying ? false : true
            render()
            Playlist.flip()
        })
    }

    const render = _ => {
        playerCountEl.innerHTML = state.songsLength
        playerTriggerEl.innerHTML = state.isPlaying ? 'Pause' : 'Play'
    }

    const setState = obj => {
        state.songsLength = obj.songsLength
        state.isPlaying = obj.isPlaying
        render()
    }
    
    return {
        init,
        setState
    }
})()

export default PlayInfo