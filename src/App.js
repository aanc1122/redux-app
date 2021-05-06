import SongList from './components/songList';
import SongDetail from './components/SongDetail';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App = () => {
    return (
        <div>
            <AppHeader />
            <div className='left song-list'>
                <SongList />
            </div>
            <div className='right panel'>
                <SongDetail />
            </div>
            <AppFooter />
        </div>
    );
}

export default App;