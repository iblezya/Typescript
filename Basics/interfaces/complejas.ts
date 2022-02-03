(() => {

  interface Client {
    name: string;
    age?: number;
    address?: Address
  }
  interface Address {
    id: number;
    zip: number | string;
    city: string;
  }

  const client: Client = {
    name: 'Blez',
    age: 26,
    address: {
      id: 152,
      zip: '150321',
      city: 'Independencia'
    }
  }

  const client2: Client = {
    name: 'Gressy',
    age: 26,
    address: {
      id: 646,
      zip: '153021',
      city: 'Independencia'
    }
  }

})()