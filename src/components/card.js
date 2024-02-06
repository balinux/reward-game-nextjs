'use client'

const Card = ({ data }) => {

  const claimReward = () => {
    console.log("berhasil menambahkan reward")
document.getElementById('my_modal_3').close()
  }

  return (
    <>
      <div className="carousel-item card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}
            <div className="badge badge-primary">{data.points} ⭐</div>
          </h2>
          <p>{data.description ?? "tidak ada deskripsi"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-block btn-primary text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Ambil bintang</button>

            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <button className="btn btn-block btn-primary text-white" onClick={claimReward}> Gasss!!!!</button>
        </div>
      </dialog>
    </>
  )
}

export default Card;
