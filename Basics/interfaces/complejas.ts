(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAdrress( id: string): void;
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
    },
    getFullAdrress() {
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Gressy',
    age: 26,
    address: {
      id: 646,
      zip: '153021',
      city: 'Independencia'
    },
    getFullAdrress() {
      return this.address.city
    }
  }

})()