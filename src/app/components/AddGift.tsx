import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Gift } from "../types";

interface Props {
  gifts: Gift[];
  setGifts: React.Dispatch<Gift[]>;
}

export default function AddGift({
  gifts,
  setGifts,
}: Props): React.ReactElement {
  const [inputVal, setInputVal] = useState("");
  const [inputQty, setInputQty] = useState<string | number>("");

  function validateGift() {
    let error;

    if (!inputVal) {
      error = "Gift is required";
    } else if (gifts.some((g) => g.title === inputVal)) {
      error = "Gift already wished";
    }

    return error;
  }

  return (
    <Formik
      initialValues={{ addGift: inputVal }}
      onSubmit={(values, actions) => {
        const newGift: Gift = {
          id: Date.now(),
          qty: Number(inputQty) ? Number(inputQty) : 1,
          title: inputVal,
        };

        setGifts([...gifts, newGift]);
        setInputVal("");
        setInputQty("");
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Stack direction="row">
            <Field name="addGift" validate={validateGift}>
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  isInvalid={form.errors.addGift && form.touched.addGift}
                >
                  <Input
                    {...field}
                    placeholder="Your wished gift..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.currentTarget.value)}
                  />
                  <FormErrorMessage
                    color="white"
                    fontSize="sm"
                    fontWeight="700"
                    marginStart={4}
                  >
                    {form.errors.addGift}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="addGiftQty">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl w={32}>
                  <Input
                    {...field}
                    placeholder="Qty"
                    value={inputQty}
                    onChange={(e) =>
                      setInputQty(
                        Number.isInteger(Number(e.currentTarget.value))
                          ? e.currentTarget.value
                          : ""
                      )
                    }
                  />
                  <FormErrorMessage
                    color="white"
                    fontSize="sm"
                    fontWeight="700"
                    marginStart={4}
                  >
                    {form.errors.addGiftQty}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button isLoading={props.isSubmitting} type="submit">
              Add
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
