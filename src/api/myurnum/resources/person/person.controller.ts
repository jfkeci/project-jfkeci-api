import { NextFunction, Router, Request, Response } from "express";
import Controller from "../../../../utils/interfaces/controller.interface";
import HttpException from '../../../../utils/exceptions/http.exception';
import PersonService from '@/myurnum/resources/person/person.service';
import PersonRoutes from '@/myurnum/resources/person/person.routes';

class PersonController implements Controller {
    public router = Router();

    public PersonService = new PersonService();

    constructor() {
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router = new PersonRoutes().init(this);
    }

    public createPerson = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { name, surname } = req.body;
            const newPerson = await this.PersonService.createPerson(name, surname);

            if (!newPerson) return next(new HttpException(400, 'Something went wrong'));

            return res.status(200).json(newPerson);
        } catch (error: any) {
            return next(new HttpException(500, error.message));
        }
    }
}

export default PersonController;