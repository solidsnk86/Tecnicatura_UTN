package domain;

import java.util.Date;

public class Cliente {
    private static int idCliente;

    public static int getIdCliente() {
        return idCliente;
    }

    public static void setIdCliente(int aIdCliente) {
        idCliente = aIdCliente;
    }
    private Date fechaRegistro;
    private boolean vip;

    public Cliente(Date fechaRegistro, boolean vip) {
        this.fechaRegistro = fechaRegistro;
        this.vip = vip;
    }

    public Date getFechaRegistro() {
        return this.fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public boolean isVip() {
        return this.vip;
    }

    public void setVip(boolean vip) {
        this.vip = vip;
    }
    
    
            
}
