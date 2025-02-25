
import React from 'react'

import { CTable, CButton, CContainer } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import Swal from 'sweetalert2'


const ViewAppProducts = () => {
  const navigate = useNavigate();



  const addNewProduct = _ => {
    navigate('/product/add-products');
  }

  const handleDelete = e => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  }

  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'product_name',
      label: 'Product name',
      _props: { scope: 'col' },
    },
    {
      key: 'desc',
      label: 'Product description',
      _props: { scope: 'col' },
    },
    {
      key: 'title',
      label: 'Title',
      _props: { scope: 'col' },
    },
    {
      key: 'price',
      label: 'Price',
      _props: { scope: 'col' },
    },
    {
      key: 'life',
      label: 'Life',
      _props: { scope: 'col' },
    },
    {
      key: 'stock',
      label: 'Stock',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]

  const items = [
    {
      id: 1,
      product_name: 'Mark',
      desc: 'Otto',
      title: '@mdo',
      price: 123,
      life: 567,
      stock: 34,
      action: (
        <>
          <CButton color="primary" size="sm" className="me-2">
            <CIcon icon={cilPencil} />
          </CButton>
          <CButton color="danger" size="sm" onClick={e => handleDelete(e)}>
            <CIcon icon={cilTrash} />
          </CButton>
        </>
      ),
      _cellProps: { id: { scope: 'row' } },
    }
  ]

  return (
    <>
      <CContainer style={{ textAlign: 'end', marginBottom: "20px" }}>
        <CButton color="success" size="sm" onClick={addNewProduct}>
          <CIcon icon={cilPlus} />
        </CButton>
      </CContainer>
      <CTable hover columns={columns} items={items} />
    </>
  )
}

export default ViewAppProducts
