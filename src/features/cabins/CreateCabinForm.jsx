import styled from 'styled-components'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import FormRow from '../../ui/FormRow'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

// const Label = styled.label`
//   font-weight: 500;
// `

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState
  // console.log(errors)

  const queryClient = useQueryClient()
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('A new cabin succesfully created ')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
      reset()
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  function onSubmit(data) {
    console.log(data.image[0])
    mutate({ ...data, image: data.image[0] })
  }
  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.name?.message} label={'Cabin name'}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message} label={'Maximum capacity'}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'The capacity has to be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.regularPrice?.message} label={'Regular price'}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'The price has to be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.discount?.message} label={'discount'}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              'Discount shold be less than the regular price',
          })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message} label={'description'}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label={'Cabin photo'}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
