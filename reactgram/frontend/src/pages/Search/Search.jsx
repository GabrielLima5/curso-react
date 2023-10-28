import './Search.css'

// hooks
import { useQuery } from '../../hooks/useQuery'
import { useSelector } from 'react-redux'

// components
import Loading from '../../components/Loading'
import RenderPhoto from '../../components/RenderPhoto'

// redux
import { searchPhotos } from '../../slices/photoSlice'

export default function Search(){
    const query = useQuery()
    const search = query.get('q')
    const {photos, loading} = useSelector((state) => state.photo)

    loading && <Loading />

    return(
        <div id="search">
            <RenderPhoto photos={photos} fn={() => searchPhotos(search)} />
        </div>
    )
}