import { useSelector} from 'react-redux'
import Loading from '../../components/Loading'
import RenderPhoto from '../../components/RenderPhoto'

import { getAllPhotos, likePhoto } from '../../slices/photoSlice'
export default function Home(){
    const {photos, loading} = useSelector((state) => state.photo)
    loading && <Loading />

    return(
        <div id="home">
            <RenderPhoto photos={photos} fn={() => getAllPhotos()} />
        </div>
    )
}