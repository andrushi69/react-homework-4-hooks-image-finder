import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import classes from "./Api.module.scss";
import Loading from "../Loader/Loading";
import MainScreen from "../MainScreenContent/MainScreen";
import RenderHits from "../HitsItemsRender/HitsRender";
import Modal from "../Modal/Modal";
import {ReactComponent as CloseBtn} from "../../icons/close.svg";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";


const ApiResults = ({hitsTags}) => {
  const [hits, setHits] = useState([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [page, setPage] = useState(1)
  const [largeImage, setLargeImage] = useState("")
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false)

  useEffect(() => {
    setShowLoadMoreBtn(false)
    if (!hitsTags) {
      return;
    }
    if (hitsTags) {
      getImages()
    }
  }, [hitsTags])

  useEffect(() => {
    if (hits) {
      setHits([])
    }
  }, [hitsTags])

  const api = {
    hitsTags: "",
    KEY: '23101955-6369c6792be6f6752905e3e3e',
    BASE_URL: 'https://pixabay.com/api/',
    orientation: 'all',
    imgType: 'all'
  }
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const getImages = () => {
    setShowLoadMoreBtn(false)
    setLoading(true)
    fetch(`${api.BASE_URL}?image_type=${api.imgType}&orientation=${api.orientation}&page=${page}&per_page=12&key=${api.KEY}&q=${hitsTags}`)
      .then(response => response.json())
      .then(hits => {
        setHits(prevState => [...prevState, ...hits.hits])
        setShowLoadMoreBtn(true)
        setPage(prevState => prevState + 1)
        if (!hits.hits.length) {
          toast("Nothing found!")
          setShowLoadMoreBtn(false)
        }
      })
      .finally(() =>
        setLoading(false)
      )
  }
  const handleGalleryItem = fullImageUrl => {
    setLargeImage(fullImageUrl)
    setShowModal(true)
  };

  return (
    <div className={classes.information_container}>
      <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick
                      rtl={false} theme="dark" pauseOnFocusLoss={false} draggable pauseOnHover/>
      {loading && (<Loading/>)}
      {!hitsTags && (<MainScreen/>)}
      {hits && (<RenderHits onImageClick={handleGalleryItem} hits={hits}/>)}
      {showModal && (<Modal closeModal={toggleModal}>
        <img className={classes.modal_img} src={largeImage} alt="modal"/>
        <button className={classes.close_btn} onClick={toggleModal}>
          <CloseBtn width={40} height={40}/>
        </button>
      </Modal>)}
      {showLoadMoreBtn && <LoadMoreButton onClick={getImages}/>}
    </div>
  )
}
export default ApiResults
