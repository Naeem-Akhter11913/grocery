import React, { useState } from 'react'

import {
  CCol,
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CImage
} from '@coreui/react'
import ImageShow from './ImageShow'

const AddProducts = () => {

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Product name"
          name='productName'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormSelect
          aria-label="Default select example"
          id="validationCustom02"
          label="Product type"
          name='productType'
          options={[
            // { label: 'Open this select menu' },
            // { label: 'Open this select menu', value: '', disabled: true, selected:true },
            { label: 'Open this select menu', value: '' },
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
          ]}
        />
      </CCol>

      <CCol md={4}>
        <CFormInput
          type="file"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Front Image"
          required
          accept='image/*'
          name='frontImage'
        />
        <ImageShow images={["h"]}/>
      </CCol>

      <CCol md={4}>
        <CFormInput
          type="file"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Back Image"
          required
          accept='image/*'
          name='backImage'
        />
        <ImageShow images={["h"]}/>
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Real Price"
          required
          name='actualPrice'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Discount Price"
          required
          name='falsePrice'
        />
      </CCol>

      <CCol md={4}>
        <CFormInput
          type="file"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Select show images"
          required
          multiple
          accept='image/*'
          name='images'
        />
        <ImageShow images={["h"]}/>
      </CCol>

      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Stock keeping unit"
          required
          name='sku'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Manufacturing"
          required
          name='mfg'
        />
      </CCol>

      <CCol md={4}>
        <CFormSelect
          aria-label="Default select example"
          id="validationCustom02"
          label="Tags"
          name='tags'
          options={[
            // { label: 'Open this select menu' },
            // { label: 'Open this select menu', value: '', disabled: true, selected:true },
            { label: 'Open this select menu', value: '' },
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
          ]}
        />
      </CCol>

      <CCol md={4}>
        <CFormInput
          type="number"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Life"
          required
          name='life'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Stock"
          required
          name='stock'
        />
      </CCol>
      <h3>Product description</h3>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Type Of Packing"
          required
          name='typeOfPacking'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="color"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Type Of Packing"
          required
          name='color'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Quantity per case"
          required
          name='quantityPerCase'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Ethyl Alcohol"
          required
          name='ethylAlcohol'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Piece In One"
          required
          name='pieceInOne'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Packaging And Delivery"
          required
          name='packagingAndDelivery'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='comma separator'
          required
          name='suggestedUse'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Other ingredients'
          required
          name='otherIngredients'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Warnings'
          required
          name='warnings'
        />
      </CCol>
      <CCol md={12}>
        <CFormTextarea
          id="exampleFormControlTextarea1"
          label="Product description"
          rows={3}
          name='productDisc'
        ></CFormTextarea>
      </CCol>
      <h3>Specifications</h3>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Stand up'
          required
          name='standUp'
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Folded without wheels'
          name='foldedWithoutWheels'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Folded with wheels'
          name='foldedWithWheels'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Door pass through'
          name='doorPassThrough'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Frame'
          name='frame'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Weight without wheels'
          name='weightWithoutWheels'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Weight capacity'
          name='weightCapacity'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Width'
          name='width'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Height'
          name='handleHeight'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Wheels'
          name='wheels'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Seat back height'
          name='seatBackHeight'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Head room inside canopy'
          name='headRoomInsideCanopy'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Product color separate by comma'
          name='productColor'
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="Suggested use"
          placeholder='Size separate by comma like(X,XI)'
          name='size'
          required
        />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

export default AddProducts