import Person from '@/myurnum/resources/person/person.interface';
import PersonModel from '@/myurnum/resources/person/person.model';

class PersonService {
    private person = PersonModel;

    public async createPerson(
        name: string,
        surname: string,
    ): Promise<Person | null> {
        const newPerson = await this.person.create({
            name: name,
            surname: surname
        });

        return newPerson;
    }

    public async getPeople(): Promise<Array<Person> | null> {
        const people = await this.person.find({});

        return people;
    }

    public async getPerson(
        _id: string
    ): Promise<Person | null> {
        const person = await this.person.findOne({ _id });

        return person;
    }

    public async deletePerson(
        _id: string,
    ): Promise<Person | null> {
        const deletedPerson = await this.person.findByIdAndRemove(_id);

        return deletedPerson;
    }

    public async updatePerson(
        _id: string,
        person: object
    ): Promise<Person | null> {
        const updatedPerson = await this.person.findByIdAndUpdate(_id, person);

        return updatedPerson;
    }
}

export default PersonService;
