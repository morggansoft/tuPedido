/**
 * Payment Gateways
 *
 * @enum {number}
 */
enum PaymentGateways {
	Stripe,
	PayPal,
	MercadoPago,
}

export function paymentGatewaysToString(
	paymentGateway: PaymentGateways
): string {
	switch (paymentGateway) {
		case PaymentGateways.Stripe:
			return 'Stripe';
		case PaymentGateways.PayPal:
			return 'PayPal';
		case PaymentGateways.MercadoPago:
			return 'Visa, Mastercard, Cabal, Lider, Mercadopago';
		default:
			return 'BAD_PAYMENT_GATEWAY';
	}
}

export function paymentGatewaysLogo(paymentGateway: PaymentGateways): string {
	switch (paymentGateway) {
		case PaymentGateways.Stripe:
			return 'https://stripe.com/img/v3/home/twitter.png';
		case PaymentGateways.PayPal:
			return 'https://avatars1.githubusercontent.com/u/476675?s=200&v=4';
		case PaymentGateways.MercadoPago:
			return '/assets/imgs/mercadopago_logo.png';
		default:
			return 'BAD_PAYMENT_GATEWAY';
	}
}

export default PaymentGateways;
