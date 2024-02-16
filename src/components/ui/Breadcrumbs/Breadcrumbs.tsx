function Breadcrumbs({ lg }: { lg?: boolean }) {
  return (
    <div className={`cus-breadcrumb w-100 ${lg ? 'd-none d-lg-block' : 'd-block'}`}>
      <ul>
        <li>Shipping</li>
        <li className='active'>Payment</li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
