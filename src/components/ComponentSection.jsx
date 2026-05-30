import './ComponentSection.css';
export default function ComponentSection({componentImage}) {
  return (
    <div className="componentBox">
      <div>
        <img className="images" src={componentImage} />
        <p>Text</p>
      </div>
    </div>
  )
}
