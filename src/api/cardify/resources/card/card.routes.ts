import { authAdmin } from '../../../../middleware/authenticated.middleware';
import validation from '../../../../middleware/validation.middleware';
import { Router } from 'express';
import CardController from '@/cardify/resources/card/card.controller';
import validate from '@/cardify/resources/card/card.validation';

class CardRoutes {
    private router = Router();
    private path = '/cardify/cards';

    public init(controller: CardController): Router {

        this.router.post(
            `${this.path}`,
            validation(validate.create),
            controller.createCard
        )

        this.router.patch(
            `${this.path}/:id`,
            validation(validate.create),
            controller.updateCard
        )

        this.router.delete(
            `${this.path}/:id`,
            controller.deleteCard
        )

        this.router.get(
            `${this.path}`,
            controller.getCards
        )

        return this.router
    }

}

export default CardRoutes;