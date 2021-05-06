import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) return <h2>Please select a song</h2>
    return (
        <div>
            <h2>Song details:</h2>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);