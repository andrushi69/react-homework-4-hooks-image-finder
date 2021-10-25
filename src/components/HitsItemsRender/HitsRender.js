import Hit from "./HitsItem";
import classes from "./Hits.module.scss"

export default function RenderHits({hits, onImageClick}) {
  return (
    <ul className={classes.gallery}>
      {hits.map(hit => (
        <Hit key={hit.id} onImageClick={onImageClick} largeImageURL={hit.largeImageURL} webformatURL={hit.webformatURL}
             comments={hit.comments}
             downloads={hit.downloads} tags={hit.tags} views={hit.views} pageURL={hit.pageURL} likes={hit.likes}/>))}
    </ul>
  )
}
