import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../../../utils/interfaces/controller.interface';
import HttpException from '../../../../utils/exceptions/http.exception';
import { isValidId } from '../../../../utils/validate.utils';
import CardService from '@/cardify/resources/card/card.service'
import CardRoutes from '@/cardify/resources/card/card.routes'

class CardController implements Controller {
    public router = Router();

    private CardService = new CardService();

    constructor() {
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router = new CardRoutes().init(this);
    }

    public createCard = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const newCard = await this.CardService.createCard(req.body)

            res.status(200).json(newCard);
        } catch (error: any) {
            return next(new HttpException(500, error.message))
        }
    }

    public getCards = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const cards = await this.CardService.getCards();

            if (!cards) return next(new HttpException(404, 'No cards found'))

            return res.status(200).json(cards);
        } catch (error: any) {
            return next(new HttpException(500, error.message))
        }
    }

    public updateCard = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            let id = req.params.id;
            const card = req.body;

            const updatedCard = await this.CardService.updateCard(id, card);
            return res.status(200).json(updatedCard);
        } catch (error: any) {
            return next(new HttpException(500, error.message));
        }
    }

    public deleteCard = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const id = req.params.id;

            if (!isValidId(id)) return next(
                new HttpException(404, 'Invalid id')
            );

            const card = await this.CardService.deleteCard(id);

            if (!card) return next(
                new HttpException(400, 'Something went wrong')
            )

            return res.sendStatus(204);
        } catch (error: any) {
            return next(new HttpException(500, error.message));
        }
    }
}

export default CardController;
