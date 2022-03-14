import Card from '@/cardify/resources/card/card.interface';
import CardModel from '@/cardify/resources/card/card.model';


class CardService {
    private card = CardModel;

    public async createCard(
        card: Card,
    ): Promise<Card | null> {
        const newCard = await this.card.create(card);

        return newCard;
    }

    public async getCards(): Promise<Array<Card> | null> {
        const cards = await this.card.find({});

        return cards;
    }

    public async updateCard(
        _id: string,
        card: Card,
    ): Promise<Card | null> {
        const updatedCard = await this.card.findByIdAndUpdate(_id, card);

        return updatedCard;
    }

    public async deleteCard(_id: string): Promise<Card | null> {
        const deletedCard = await this.card.findByIdAndRemove(_id);

        return deletedCard;
    }
}

export default CardService;