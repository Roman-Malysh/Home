import '../styles/Loader.scss';

export const Loader = () => {
  return (
    <div style={{display: "flex", alignItems: "center", height: "50vh"}}>
      <div className="lds-hourglass"></div>
    </div>
  )
}
