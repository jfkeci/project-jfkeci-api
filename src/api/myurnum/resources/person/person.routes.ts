import { Router } from "express";
import PersonController from '@/myurnum/resources/person/person.controller'


class PersonRoutes {
    private router = Router();
    private path = '/myurnum/people';

    public init(controller: PersonController): Router {
        this.router.post(
            `${this.path}`,
            controller.createPerson
        );

        return this.router;
    }
}

export default PersonRoutes;