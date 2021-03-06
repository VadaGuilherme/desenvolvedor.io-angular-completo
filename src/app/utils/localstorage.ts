export class LocalStorageUtils {
    public ObterUsuario() {
        return JSON.parse(localStorage.getItem('devio.user'));
    }

    public SalvarDadosLocaisUsuario(response: any) {
        this.SalvarTokenUsuario(response.accessToken);
        this.SalvarUsuario(response.userToken);
    }

    public LimparDadosLocaisUsuario() {
        localStorage.removeItem('devio.token');
        localStorage.removeItem('devio.user');
    }

    public ObterTokenUsuario(): string {
        return localStorage.getItem('devio.token');
    }

    public SalvarTokenUsuario(token: string) {
        localStorage.setItem('devio.token', token);
    }

    public SalvarUsuario(user: string) {
        localStorage.setItem('devio.user', JSON.stringify(user));
    }
}