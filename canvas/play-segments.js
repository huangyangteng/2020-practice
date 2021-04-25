/* HTML5 Video Play sequence of video segments - Working version - Vanilla JS
author: Pietro Passarelli
date: 29th Sept 2015
Description: a plain vanilla javascript that makes the most of the HTML5 Video element to play a sequence of video segments continuosly, where src, inp point and out point are specified.
Notes: Needs refactoring to remove side effects from methods.
*/

//sample sequence of video segments, array of objects with src, in point, and outpoint.
var transcripts = [
    {
        src: 'http://solutions.brightcove.com/bcls/assets/videos/SeaTurtle.mp4',
        inPoint: 2,
        outPoint: 4
    },
    {
        src: 'http://solutions.brightcove.com/bcls/assets/videos/SeaTurtle.mp4',
        inPoint: 4,
        outPoint: 8
    },
    {
        src:
            'http://solutions.brightcove.com/bcls/assets/videos/Water-Droplet.mp4',
        inPoint: 3,
        outPoint: 5
    },
    {
        src: 'http://solutions.brightcove.com/bcls/assets/videos/SeaTurtle.mp4',
        inPoint: 13,
        outPoint: 15
    },
    {
        src: 'http://solutions.brightcove.com/bcls/assets/videos/bumper2.mp4',
        inPoint: 1,
        outPoint: 3
    }
]

//Video instance
var video = document.getElementById('preview')

function playVideoSegments(transcripts) {
    // initialised counter to play video segments in the array
    var counter = 0
    /*******************base case, first video ****************/
    //base case, playing first video segment in sequence
    var videoSrc = transcripts[counter]['src']
    var inPoint = transcripts[counter]['inPoint']
    var outPoint = transcripts[counter]['outPoint']
    // helper function to play one video segment
    playOneSegment(videoSrc, inPoint, outPoint)
    /*******************subsequent videos ****************/
    // for video segments following first one, triggered on play end event listener for HTML5 video
    video.addEventListener(
        'ended',
        function (e) {
            // helper function to play video segments
            playSqOfSegments(transcripts)
        },
        false
    )
    /*******************Helper functions ****************/

    //define helper method - play sequence of segments
    function playSqOfSegments(transcripts) {
        videoSrc = transcripts[counter]['src']
        inPoint = transcripts[counter]['inPoint']
        outPoint = transcripts[counter]['outPoint']
        playOneSegment(videoSrc, inPoint, outPoint)
    }

    //define helper method - play one video segment
    function playOneSegment(videoSrc, inPoint, outPoint) {
        video.src = videoSrc
        video.load
        video.currentTime = inPoint
        video.play()
        video.ontimeupdate = function () {
            stopAtOutPoint()
        }
        counter += 1
    }

    //define helper method - play video till end point
    function stopAtOutPoint() {
        if (parseInt(video.currentTime) > outPoint) {
            video.pause()
            video.currentTime = video.duration
        }
    }
}

//wrap in a function for play button
function playVideo() {
    playVideoSegments(transcripts)
}

/************************Buttons*********************/
//play
var playBtn = document.getElementById('playButton')

playBtn.onclick = function (e) {
    playBtn.innerHTML = 'restart'
    playVideoSegments(transcripts)
}
//pause
var pauseBtn = document.getElementById('pauseButton')

pauseBtn.onclick = function (e) {
    pauseBtn.innerHTML = 'pause'
    console.log(video.src)
    video.pause()
}
//resume
var resumeButton = document.getElementById('resumeButton')

resumeButton.onclick = function (e) {
    resumeButton.innerHTML = 'resume'
    video.play()
}
