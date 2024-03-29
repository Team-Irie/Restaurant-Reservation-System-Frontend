export interface Reservation {
    reservationId?: number;
    customer: number;
    partySize: number;
    reservationTime: number;
    restaurantName: string;
    restaurantAddress?: string;
    restaurantPhoneNumber?: string;
    reservationStatus: string;
    reservationRating?: number;
}