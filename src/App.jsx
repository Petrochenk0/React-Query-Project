import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import CoinsTable from './components/CoinsTable';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
async function getData() {
  return (await axios.get(`https://63fa69b9897af748dccebef2.mockapi.io/items`)).data;
}
async function postData(data) {
  // функция для добавления поста
  return axios.post(`https://63fa69b9897af748dccebef2.mockapi.io/items/`, data);
}
function App() {
  const { data, isLoading } = useQuery('products', getData);

  const queryClient = useQueryClient();

  const whyMutation = useMutation((whyValueForMutation) => postData(whyValueForMutation), {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']); // Инвалидация кэша - это обновление кэша для актуальности, снчала мы очищаем данные, а потом обновляем добавляя самые новые
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Data is not defined</h1>;
  }

  const onSubmit = (event) => {
    event.preventDefault(); // эта функция предотвращает отправку формы до определённых действий

    const informationFromForm = new FormData(event.target); // тут мы создаём объект который содержит данные формы

    const informationInInput = Object.fromEntries(informationFromForm); // тут преобразуем результат в объект для дальнейшего удобного использования
    whyMutation.mutate(informationInInput);

    event.target.reset(); // очищаем форму
  };

  return (
    <Container style={{ marginTop: 50, maxWidth: 700 }}>
      <CoinsTable data={data} />
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control name="name" type="text" placeholder="Name"></Form.Control>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Control name="price" type="number" placeholder="Price"></Form.Control>
        </Form.Group>
        <hr />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
}
export default App;
