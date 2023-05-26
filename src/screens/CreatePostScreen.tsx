import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  TextArea,
  WarningOutlineIcon,
  View,
} from "native-base";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThumbnailUploader } from "../components";
import { useQuery } from "@tanstack/react-query";
import { createPost } from "../actions";
import { useDispatch } from "react-redux";
import { PostSchemaType, postSchema } from "../constants/types";

const CreatePostScreen = ({ navigation }: any) => {
  const { goBack } = navigation;
  const dispatch = useDispatch<any>();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["postsData"],
    queryFn: () =>
      fetch("https://dummyjson.com/posts").then((res) => res.json()),
  });

  const onSubmit: SubmitHandler<PostSchemaType> = (data) => {
    dispatch(createPost(data));
    goBack();
  };

  const generateFakeData = () => {
    if (isLoading) {
      alert("Data are still loading");
      return;
    }

    if (error) {
      alert(error);
      return;
    }
    const randomIndex = Math.floor(Math.random() * data?.posts?.length);
    const randomPost = data?.posts?.[randomIndex];
    setValue("title", randomPost.title);
    setValue("body", randomPost.body);
  };

  return (
    <ScrollView style={{ margin: 10, flex: 1 }}>
      <Box alignItems='center'>
        <FormControl w='100%' isRequired isInvalid={"thumbnail" in errors}>
          <FormControl.Label>Thumbnail</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <ThumbnailUploader
                setUri={onChange}
                uri={value}
                isInvalid={"thumbnail" in errors}
              />
            )}
            name='thumbnail'
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
            {errors.thumbnail?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl w='100%' isRequired isInvalid={"title" in errors}>
          <FormControl.Label>Title</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder='Type a title'
                onChangeText={onChange}
                value={value}
                isInvalid={"title" in errors}
              />
            )}
            name='title'
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
            {errors.title?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl w='100%' isRequired isInvalid={"body" in errors}>
          <FormControl.Label>Body</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                h={20}
                placeholder='Body'
                w='100%'
                autoCompleteType={""}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isInvalid={"body" in errors}
              />
            )}
            name='body'
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
            {errors.body?.message}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <View style={{ marginVertical: 5 }} />
      <Button onPress={handleSubmit(onSubmit)}>Save</Button>
      <View style={{ marginVertical: 5 }} />
      <Button variant='subtle' onPress={generateFakeData}>
        Generate Fake Data
      </Button>
    </ScrollView>
  );
};

export default CreatePostScreen;
