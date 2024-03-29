import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')
  if (error) {
    console.error(error)
    throw new Error("The cabins couldn't be loaded ")
  }
  return data
}
//delete
export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)
  if (error) {
    console.error(error)
    throw new Error("The cabin couldn't be deleted ")
  }
  return data
}

// a new cabin
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    '',
  )

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //create/edit a cabin
  let query = supabase.from('cabins')
  //A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }])
  //B)EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id)

  const { data, error } = await query.select().single()
  if (error) {
    console.error(error)
    throw new Error("The cabin couldn't be created ")
  }
  //upload an image
  if (hasImagePath) return data
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  //prevent /delete the cabin if there an error uploading an img
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error(
      `The image cannot be uploaded and the cabin wasn't created `,
    )
  }

  return data
}

/////
// export async function createCabin(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     '/',
//     '',
//   )

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
//   //create a cabin
//   const { data, error } = await supabase
//     .from('cabins')
//     .insert([{ ...newCabin, image: imagePath }])
//     .select()
//     .single()
//   if (error) {
//     console.error(error)
//     throw new Error("The cabin couldn't be created ")
//   }

//   //upload an image
//   const { error: storageError } = await supabase.storage
//     .from('cabin-images')
//     .upload(imageName, newCabin.image)

//   //prevent /delete the cabin if there an error uploading an img
//   if (storageError) {
//     await supabase.from('cabins').delete().eq('id', data.id)
//     console.error(storageError)
//     throw new Error(
//       `The image cannot be uploaded and the cabin wasn't created `,
//     )
//   }

//   return data
// }
