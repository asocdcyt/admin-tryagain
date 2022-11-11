import User from "../models/Users";
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export const data = async (req, res) => {
    try {
        const allData = await User.find().sort({ date: "desc" })
        .lean();
        res.render("admin/data", { allData });
    } catch (error) {
        console.log(error);
    }
};

export const deleteNoteGET = async (req, res) => {
    try {
        const dash = await User.findById(req.params.id).lean();
        res.render("admin/delete", { dash });
    } catch (error) {
        console.log(error);
    }
};

export const deleteNote = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Cliente eliminado con éxito.");
    res.redirect("/data");
  };

export const view = async (req, res) => {
    try {
        const dash = await User.findById(req.params.id).lean();
        res.render("admin/view", { dash });
    } catch (error) {
        console.log(error);
    }
};

export const email = async (req, res) => {
    try {
        res.render("admin/email");
    } catch (error) {
        console.log(error);
    }
};

export const edit = async (req, res) => {
    try {
        const dash = await User.findById(req.params.id).lean();
        res.render("admin/edit", { dash });
    } catch (error) {
        console.log(error);
    }
};

export const editUpdate = async (req, res) => {
    const { plan, status, investment, balance, referral, referralactive, date, day, numberplan } = req.body;
    await User.findByIdAndUpdate(req.params.id, {plan, status, investment, balance, referral, referralactive, date, day, numberplan});
    req.flash("success_msg", "Se han actualizado los datos correctamente.");
    res.redirect("/data");
};