"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [274],
  {
    86860: function (e, t, r) {
      r.d(t, {
        w: function () {
          return tk;
        },
      });
      var n,
        i,
        s,
        a,
        o,
        l,
        d,
        h,
        u = r(86629),
        c = r(42582),
        p = r(69515),
        f = r(53996),
        y = r(83119),
        m = r(46754),
        g = r(89859),
        w = r(89302),
        A = r(16571),
        E = r(46286),
        N = r(72749),
        R = r(43517),
        v = r(57244);
      class T extends A.g {
        address;
        #e;
        constructor(e, t) {
          super(t),
            (0, c.en)(
              e && "function" == typeof e.sign,
              "invalid private key",
              "privateKey",
              "[ REDACTED ]"
            ),
            (this.#e = e);
          let r = (0, N.d)(this.signingKey.publicKey);
          (0, v.h)(this, { address: r });
        }
        get signingKey() {
          return this.#e;
        }
        get privateKey() {
          return this.signingKey.privateKey;
        }
        async getAddress() {
          return this.address;
        }
        connect(e) {
          return new T(this.#e, e);
        }
        async signTransaction(e) {
          e = (0, E.kK)(e);
          let { to: t, from: r } = await (0, v.m)({
            to: e.to ? (0, p.ru)(e.to, this.provider) : void 0,
            from: e.from ? (0, p.ru)(e.from, this.provider) : void 0,
          });
          null != t && (e.to = t),
            null != r && (e.from = r),
            null != e.from &&
              ((0, c.en)(
                (0, f.K)(e.from) === this.address,
                "transaction from address mismatch",
                "tx.from",
                e.from
              ),
              delete e.from);
          let n = R.Y.from(e);
          return (
            (n.signature = this.signingKey.sign(n.unsignedHash)), n.serialized
          );
        }
        async signMessage(e) {
          return this.signMessageSync(e);
        }
        signMessageSync(e) {
          var t;
          return this.signingKey.sign(
            ("string" == typeof (t = e) && (t = (0, m.Y0)(t)),
            (0, y.w)(
              (0, g.zo)([
                (0, m.Y0)("\x19Ethereum Signed Message:\n"),
                (0, m.Y0)(String(t.length)),
                t,
              ])
            ))
          ).serialized;
        }
        async signTypedData(e, t, r) {
          let n = await w.E.resolveNames(e, t, r, async (e) => {
            (0, c.hu)(
              null != this.provider,
              "cannot resolve ENS names without a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "resolveName", info: { name: e } }
            );
            let t = await this.provider.resolveName(e);
            return (
              (0, c.hu)(
                null != t,
                "unconfigured ENS name",
                "UNCONFIGURED_NAME",
                { value: e }
              ),
              t
            );
          });
          return this.signingKey.sign(w.E.hash(n.domain, t, n.value))
            .serialized;
        }
      }
      var O = r(87293),
        I = r(81497);
      let b = !1,
        C = function (e, t, r) {
          return (0, I.zH)(e, t).update(r).digest();
        },
        k = C;
      function S(e, t, r) {
        let n = (0, g.Pw)(t, "key"),
          i = (0, g.Pw)(r, "data");
        return (0, g.Dv)(k(e, n, i));
      }
      (S._ = C),
        (S.lock = function () {
          b = !0;
        }),
        (S.register = function (e) {
          if (b) throw Error("computeHmac is locked");
          k = e;
        }),
        Object.freeze(S);
      var P = r(97529),
        U = r(68104);
      let D = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        L = Uint8Array.from({ length: 16 }, (e, t) => t),
        M = L.map((e) => (9 * e + 5) % 16),
        x = [L],
        $ = [M];
      for (let e = 0; e < 4; e++)
        for (let t of [x, $]) t.push(t[e].map((e) => D[e]));
      let K = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        B = x.map((e, t) => e.map((e) => K[t][e])),
        G = $.map((e, t) => e.map((e) => K[t][e])),
        _ = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        F = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        W = (e, t) => (e << t) | (e >>> (32 - t));
      function V(e, t, r, n) {
        return 0 === e
          ? t ^ r ^ n
          : 1 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t | ~r) ^ n
          : 3 === e
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      let z = new Uint32Array(16);
      class Y extends P.N {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          let { h0: e, h1: t, h2: r, h3: n, h4: i } = this;
          return [e, t, r, n, i];
        }
        set(e, t, r, n, i) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | i);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) z[r] = e.getUint32(t, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            s = i,
            a = 0 | this.h2,
            o = a,
            l = 0 | this.h3,
            d = l,
            h = 0 | this.h4,
            u = h;
          for (let e = 0; e < 5; e++) {
            let t = 4 - e,
              c = _[e],
              p = F[e],
              f = x[e],
              y = $[e],
              m = B[e],
              g = G[e];
            for (let t = 0; t < 16; t++) {
              let n = (W(r + V(e, i, a, l) + z[f[t]] + c, m[t]) + h) | 0;
              (r = h), (h = l), (l = 0 | W(a, 10)), (a = i), (i = n);
            }
            for (let e = 0; e < 16; e++) {
              let r = (W(n + V(t, s, o, d) + z[y[e]] + p, g[e]) + u) | 0;
              (n = u), (u = d), (d = 0 | W(o, 10)), (o = s), (s = r);
            }
          }
          this.set(
            (this.h1 + a + d) | 0,
            (this.h2 + l + u) | 0,
            (this.h3 + h + n) | 0,
            (this.h4 + r + s) | 0,
            (this.h0 + i + o) | 0
          );
        }
        roundClean() {
          z.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      let J = (0, U.hE)(() => new Y()),
        j = !1,
        H = function (e) {
          return J(e);
        },
        X = H;
      function Z(e) {
        let t = (0, g.Pw)(e, "data");
        return (0, g.Dv)(X(t));
      }
      (Z._ = H),
        (Z.lock = function () {
          j = !0;
        }),
        (Z.register = function (e) {
          if (j) throw TypeError("ripemd160 is locked");
          X = e;
        }),
        Object.freeze(Z);
      let q = !1,
        Q = function (e) {
          return new Uint8Array((0, I.O6)(e));
        },
        ee = Q;
      function et(e) {
        return ee(e);
      }
      (et._ = Q),
        (et.lock = function () {
          q = !0;
        }),
        (et.register = function (e) {
          if (q) throw Error("randomBytes is locked");
          ee = e;
        }),
        Object.freeze(et);
      var er = r(4870),
        en = r(57452),
        ei = r(59634);
      let es = " !#$%&'()*+,-./<=>?@[]^_`{|}~",
        ea = /^[a-z]*$/i;
      function eo(e, t) {
        let r = 97;
        return e.reduce(
          (e, n) => (
            n === t
              ? r++
              : n.match(ea)
              ? e.push(String.fromCharCode(r) + n)
              : ((r = 97), e.push(n)),
            e
          ),
          []
        );
      }
      class el {
        locale;
        constructor(e) {
          (0, v.h)(this, { locale: e });
        }
        split(e) {
          return e.toLowerCase().split(/\s+/g);
        }
        join(e) {
          return e.join(" ");
        }
      }
      class ed extends el {
        #t;
        #r;
        constructor(e, t, r) {
          super(e), (this.#t = t), (this.#r = r), (this.#n = null);
        }
        get _data() {
          return this.#t;
        }
        _decodeWords() {
          var e;
          return (
            (e = this.#t),
            (0, c.en)("0" === e[0], "unsupported auwl data", "data", e),
            (function (e, t) {
              for (let r = es.length - 1; r >= 0; r--)
                e = e.split(es[r]).join(t.substring(2 * r, 2 * r + 2));
              let r = [],
                n = e.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (e, t, n, i) => {
                  if (n) for (let e = parseInt(n); e >= 0; e--) r.push(";");
                  else r.push(t.toLowerCase());
                  return "";
                });
              if (n) throw Error(`leftovers: ${JSON.stringify(n)}`);
              return eo(eo(r, ";"), ":");
            })(
              e.substring(1 + 2 * es.length),
              e.substring(1, 1 + 2 * es.length)
            )
          );
        }
        #n;
        #i() {
          if (null == this.#n) {
            let e = this._decodeWords();
            if ((0, ei.id)(e.join("\n") + "\n") !== this.#r)
              throw Error(`BIP39 Wordlist for ${this.locale} FAILED`);
            this.#n = e;
          }
          return this.#n;
        }
        getWord(e) {
          let t = this.#i();
          return (
            (0, c.en)(
              e >= 0 && e < t.length,
              `invalid word index: ${e}`,
              "index",
              e
            ),
            t[e]
          );
        }
        getWordIndex(e) {
          return this.#i().indexOf(e);
        }
      }
      let eh = null;
      class eu extends ed {
        constructor() {
          super(
            "en",
            "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO",
            "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"
          );
        }
        static wordlist() {
          return null == eh && (eh = new eu()), eh;
        }
      }
      let ec = !1,
        ep = function (e, t, r, n, i) {
          return (0, I.Sf)(e, t, r, n, i);
        },
        ef = ep;
      function ey(e, t, r, n, i) {
        let s = (0, g.Pw)(e, "password"),
          a = (0, g.Pw)(t, "salt");
        return (0, g.Dv)(ef(s, a, r, n, i));
      }
      function em(e) {
        return (((1 << e) - 1) << (8 - e)) & 255;
      }
      function eg(e, t) {
        (0, c.fA)("NFKD"), null == t && (t = eu.wordlist());
        let r = t.split(e);
        (0, c.en)(
          r.length % 3 == 0 && r.length >= 12 && r.length <= 24,
          "invalid mnemonic length",
          "mnemonic",
          "[ REDACTED ]"
        );
        let n = new Uint8Array(Math.ceil((11 * r.length) / 8)),
          i = 0;
        for (let e = 0; e < r.length; e++) {
          let s = t.getWordIndex(r[e].normalize("NFKD"));
          (0, c.en)(
            s >= 0,
            `invalid mnemonic word at index ${e}`,
            "mnemonic",
            "[ REDACTED ]"
          );
          for (let e = 0; e < 11; e++)
            s & (1 << (10 - e)) && (n[i >> 3] |= 1 << (7 - (i % 8))), i++;
        }
        let s = (32 * r.length) / 3,
          a = em(r.length / 3),
          o = (0, g.Pw)((0, O.J)(n.slice(0, s / 8)))[0] & a;
        return (
          (0, c.en)(
            o === (n[n.length - 1] & a),
            "invalid mnemonic checksum",
            "mnemonic",
            "[ REDACTED ]"
          ),
          (0, g.Dv)(n.slice(0, s / 8))
        );
      }
      function ew(e, t) {
        (0, c.en)(
          e.length % 4 == 0 && e.length >= 16 && e.length <= 32,
          "invalid entropy size",
          "entropy",
          "[ REDACTED ]"
        ),
          null == t && (t = eu.wordlist());
        let r = [0],
          n = 11;
        for (let t = 0; t < e.length; t++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[t]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[t] >> (8 - n)),
              r.push(e[t] & (((1 << (8 - n)) - 1) & 255)),
              (n += 3));
        let i = e.length / 4,
          s = parseInt((0, O.J)(e).substring(2, 4), 16) & em(i);
        return (
          (r[r.length - 1] <<= i),
          (r[r.length - 1] |= s >> (8 - i)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      (ey._ = ep),
        (ey.lock = function () {
          ec = !0;
        }),
        (ey.register = function (e) {
          if (ec) throw Error("pbkdf2 is locked");
          ef = e;
        }),
        Object.freeze(ey);
      let eA = {};
      class eE {
        phrase;
        password;
        wordlist;
        entropy;
        constructor(e, t, r, n, i) {
          null == n && (n = ""),
            null == i && (i = eu.wordlist()),
            (0, c.NK)(e, eA, "Mnemonic"),
            (0, v.h)(this, { phrase: r, password: n, wordlist: i, entropy: t });
        }
        computeSeed() {
          let e = (0, m.Y0)("mnemonic" + this.password, "NFKD");
          return ey((0, m.Y0)(this.phrase, "NFKD"), e, 2048, 64, "sha512");
        }
        static fromPhrase(e, t, r) {
          let n = eg(e, r);
          return (e = ew((0, g.Pw)(n), r)), new eE(eA, n, e, t, r);
        }
        static fromEntropy(e, t, r) {
          let n = (0, g.Pw)(e, "entropy"),
            i = ew(n, r);
          return new eE(eA, (0, g.Dv)(n), i, t, r);
        }
        static entropyToPhrase(e, t) {
          return ew((0, g.Pw)(e, "entropy"), t);
        }
        static phraseToEntropy(e, t) {
          return eg(e, t);
        }
        static isValidMnemonic(e, t) {
          try {
            return eg(e, t), !0;
          } catch (e) {}
          return !1;
        }
      }
      var eN = function (e, t, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
        },
        eR = function (e, t, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        };
      let ev = { 16: 10, 24: 12, 32: 14 },
        eT = [
          1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
          188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
        ],
        eO = [
          99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
          118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156,
          164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241,
          113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
          235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179,
          41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190,
          57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2,
          127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182,
          218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196,
          167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136,
          70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92,
          194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
          78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
          166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181,
          102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248,
          152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140,
          161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
        ],
        eI = [
          82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
          251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
          233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
          250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
          109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164,
          92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
          21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10,
          247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
          193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
          151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
          53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
          41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
          198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221,
          168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
          127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
          224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
          23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
        ],
        eb = [
          3328402341, 4168907908, 4000806809, 4135287693, 4294111757,
          3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241,
          1445669757, 3892248089, 3050821474, 1303096294, 3967186586,
          2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171,
          2387036105, 4226871307, 1101901292, 3017069671, 1604494077,
          1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402,
          3791519004, 1033081774, 1277568618, 1815492186, 2118074177,
          4126668546, 2211236943, 1748251740, 1369810420, 3521504564,
          4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908,
          2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135,
          798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438,
          1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972,
          874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614,
          1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
          1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
          1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
          2378943302, 1740553945, 1916352843, 2487896798, 2555137236,
          2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
          3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663,
          3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106,
          1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413,
          563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573,
          1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300,
          403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436,
          773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
          3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905,
          2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882,
          3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493,
          2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571,
          201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935,
          3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010,
          2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682,
          1235855840, 3630984372, 2891339514, 4092916743, 3488279077,
          3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016,
          1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513,
          3421038627, 2715671932, 3899946140, 1042226977, 2521517021,
          1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956,
          3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891,
          1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535,
          664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707,
          2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602,
          3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671,
          1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982,
          3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163,
          2824099068, 1841019862, 739644986,
        ],
        eC = [
          2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
          2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
          434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
          1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
          3963727277, 1739838676, 4250903202, 3930435503, 3206782108,
          4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059,
          1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980,
          4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049,
          1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536,
          2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848,
          1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793,
          2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018,
          4217086112, 4137964114, 1299594043, 1639438038, 3464344499,
          2068982057, 1054729187, 1901997871, 2534638724, 4121318227,
          1757008337, 0, 750906861, 1614815264, 535035132, 3363418545,
          3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
          3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087,
          3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261,
          3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428,
          3123027871, 3813386408, 4087501137, 4267549603, 3229630528,
          2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548,
          3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083,
          1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855,
          2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534,
          1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144,
          2551808385, 3516813135, 2141445340, 1715741218, 2119445034,
          2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540,
          2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
          1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516,
          1570751170, 1857934291, 4014189740, 2797888098, 2822345105,
          2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319,
          3084545389, 2348912013, 1689376213, 3533459022, 3762923945,
          3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810,
          3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758,
          607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877,
          2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234,
          2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067,
          33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753,
          2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800,
          3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444,
          3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045,
          2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245,
          3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313,
          2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766,
        ],
        ek = [
          1671808611, 2089089148, 2006576759, 2072901243, 4061003762,
          1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671,
          729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426,
          2191335298, 3376449993, 2106063485, 4195741690, 1508618841,
          1204391495, 4027317232, 2917941677, 3563566036, 2734514082,
          2951366063, 2629772188, 2767672228, 1922491506, 3227229120,
          3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767,
          4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329,
          1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279,
          593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466,
          118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711,
          2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610,
          455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283,
          3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444,
          1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412,
          2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753,
          1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
          4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
          2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
          1011120188, 2679776671, 2833468328, 1374921297, 2751356323,
          1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005,
          3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895,
          4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324,
          1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711,
          2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699,
          1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154,
          2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740,
          3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546,
          978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276,
          3260915650, 3547250131, 2901361580, 1655096418, 2443721105,
          2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799,
          1840765549, 2374762893, 3580146133, 1322425422, 2850048425,
          1823791212, 1459268694, 4094161908, 3928346602, 1706019429,
          2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469,
          779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072,
          3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315,
          2323976074, 1888542832, 1044544574, 3049550261, 1722469478,
          1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
          1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430,
          3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385,
          2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169,
          3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649,
          2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440,
          1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308,
          3151392187, 372911126,
        ],
        eS = [
          1667474886, 2088535288, 2004326894, 2071694838, 4075949567,
          1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926,
          724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711,
          2189597983, 3385409673, 2105378810, 4210693615, 1499065266,
          1195886990, 4042263547, 2913856577, 3570689971, 2728590687,
          2947541573, 2627518243, 2762274643, 1920112356, 3233831835,
          3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142,
          4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529,
          1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789,
          589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191,
          117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286,
          2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380,
          454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198,
          3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939,
          1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667,
          2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178,
          1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
          4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
          2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
          1010582648, 2678045221, 2829640523, 1364325282, 2745433693,
          1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505,
          3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645,
          4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699,
          1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621,
          2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854,
          1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924,
          2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440,
          3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716,
          976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736,
          3267517855, 3553849021, 2897014595, 1650632388, 2442242105,
          2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254,
          1835907034, 2374863873, 3587531953, 1313788572, 2846482505,
          1819063512, 1448540844, 4109633523, 3941213647, 1701162954,
          2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314,
          774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627,
          3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845,
          2324333839, 1886425312, 1044267644, 3048588401, 1718004428,
          1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
          1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215,
          3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025,
          2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609,
          3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649,
          2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520,
          1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848,
          3149649517, 370555436,
        ],
        eP = [
          1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
          2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
          1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
          1172967064, 1576976609, 3274667266, 2169303058, 2370213795,
          1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213,
          1484005843, 1239443753, 2395588676, 1975683434, 4102977912,
          2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444,
          1675577880, 3843699074, 2538681184, 1649639237, 2976151520,
          3144396420, 4269907996, 4178062228, 1883793496, 2403728665,
          2497604743, 1383856311, 2876494627, 1917518562, 3810496343,
          1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610,
          599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432,
          1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293,
          2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582,
          3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
          2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
          2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
          2709260871, 2084704233, 4169408201, 0, 159417987, 841739592,
          504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415,
          168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535,
          3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374,
          3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893,
          766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109,
          4144047775, 1551037884, 1147550661, 1543208500, 2336434550,
          3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808,
          2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059,
          3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
          1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455,
          3644379585, 2362090238, 2564033334, 2801107407, 2776292904,
          3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698,
          4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924,
          1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923,
          3441850377, 1851332852, 3969562369, 2203032232, 3868552805,
          2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284,
          699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047,
          4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806,
          395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715,
          1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171,
          4211818798, 3009879386, 2463879762, 3910161971, 1842759443,
          2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029,
          3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775,
          1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
          3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
          4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
          3576870512, 1215061108, 3501741890,
        ],
        eU = [
          1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
          4045380933, 2880240216, 2471224067, 1428173050, 4138563181,
          2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155,
          1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728,
          2743944855, 3328955385, 3875770207, 2501218972, 3955191162,
          3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409,
          2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132,
          3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975,
          2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428,
          3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120,
          53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122,
          1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468,
          3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033,
          1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602,
          1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868,
          4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618,
          2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166,
          0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663,
          1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604,
          975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021,
          2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560,
          487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081,
          1286567175, 3152976349, 4255350624, 2683765030, 3160175349,
          3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617,
          3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061,
          296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347,
          1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879,
          3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419,
          3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554,
          2607439820, 1649704518, 3270937875, 3901806776, 1580087799,
          4118987695, 3198115200, 2087309459, 2842678573, 3016697106,
          1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472,
          32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392,
          3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
          818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
          1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904,
          1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889,
          77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
          870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476,
          4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235,
          2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891,
          2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
          2334669897, 1107234197, 1899603969, 3725069491, 2631447780,
          2422494913, 1635502980, 1893020342, 1950903388, 1120974935,
        ],
        eD = [
          2807058932, 1699970625, 2764249623, 1586903591, 1808481195,
          1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228,
          1277555970, 3623636965, 3419915562, 1149249077, 2744104290,
          1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588,
          2544078150, 4190530515, 1608975247, 2627016082, 2062270317,
          1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554,
          2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312,
          984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180,
          2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798,
          4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195,
          3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107,
          2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658,
          3201631749, 1646252340, 4270507174, 1402811438, 1436590835,
          3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366,
          2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892,
          3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497,
          1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938,
          516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170,
          4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260,
          1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075,
          3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128,
          3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854,
          428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354,
          1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452,
          3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051,
          840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177,
          376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744,
          752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444,
          2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
          2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
          2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
          2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
          2594734927, 1852171925, 3867060991, 3473416636, 3907448597,
          2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639,
          2486224549, 1723872674, 3157750862, 3399941250, 3501252752,
          3625268135, 2555048196, 3673637356, 1343127501, 4130281361,
          3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410,
          532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963,
          492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225,
          344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695,
          3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069,
          1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571,
          3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716,
          3835484340, 3247465558, 2220981195, 3060847922, 1551124588,
          1463996600,
        ],
        eL = [
          4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
          4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
          3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
          3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
          2405426947, 2459735317, 1836772287, 1381620373, 3196267988,
          1948373848, 3764988233, 3385345166, 3263785589, 2390325492,
          1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789,
          3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355,
          2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426,
          1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895,
          3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221,
          3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454,
          878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212,
          2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718,
          1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912,
          2566595609, 3186202582, 1078185097, 3651041127, 3896688048,
          2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296,
          0, 2156299017, 736970802, 292596766, 1517440620, 251657213,
          2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339,
          908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416,
          3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620,
          454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591,
          1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156,
          4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431,
          1669664834, 2535604243, 3323011204, 1243905413, 3141400786,
          4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727,
          3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
          4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
          3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
          2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
          3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
          410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
          1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
          1865862730, 2668221674, 2960971305, 2763173681, 1059270954,
          2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
          2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550,
          4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417,
          1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011,
          3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729,
          322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828,
          4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015,
          1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990,
          3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240,
          1455525988, 3414450555, 850817237, 1817998408, 3092726480,
        ],
        eM = [
          0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
          708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
          1181045119, 1417561698, 1517767529, 3767586992, 4003061179,
          4236429990, 4069246893, 3635733660, 3602770327, 3299278474,
          3400528769, 2430122216, 2664543715, 2362090238, 2193862645,
          2835123396, 2801107407, 3035535058, 3135740889, 3678124923,
          3576870512, 3341394285, 3374361702, 3810496343, 3977675356,
          4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
          3110650942, 2472011535, 2640243204, 2403728665, 2169303058,
          1001089995, 899835584, 666464733, 699432150, 59727847, 226906860,
          530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414,
          1942435775, 2110667444, 1876241833, 1641816226, 2910219766,
          2743034109, 2976151520, 3211623147, 2505202138, 2606453969,
          2302690252, 2269728455, 3711829422, 3543599269, 3240894392,
          3475313331, 3843699074, 3943906441, 4178062228, 4144047775,
          1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
          2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
          800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
          2017778566, 1784663195, 1683407248, 1315562145, 1080094634,
          1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864,
          1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334,
          2328828971, 2227573024, 2935566865, 2700099354, 3001755655,
          3168937228, 3868552805, 3902563182, 4203181171, 4102977912,
          3736164937, 3501741890, 3265478751, 3433712980, 1106041591,
          1340463100, 1576976609, 1408749034, 2043211483, 2009195472,
          1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354,
          159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380,
          3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
          2336434550, 3509871135, 3745345300, 3441850377, 3274667266,
          3910161971, 3877198648, 4110568485, 4211818798, 2597806476,
          2497604743, 2261089178, 2295101073, 2733856160, 2902087851,
          3202437046, 2968011453, 3936291284, 3835036895, 4136440770,
          4169408201, 3535486456, 3702665459, 3467192302, 3231722213,
          2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
          1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
          404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
          3801332234, 4035489047, 4269907996, 3569255213, 3669462566,
          3366754619, 3332740144, 2631065433, 2463879762, 2160117071,
          2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497,
          33778362, 270040487, 504459436, 875451293, 975658646, 675039627,
          641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
          1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972,
          632953703, 260388950, 25965917, 328671808, 496906059, 1206477858,
          1239443753, 1543208500, 1441952575, 2144161806, 1908694277,
          1675577880, 1842759443, 3610369226, 3644379585, 3408119516,
          3307916247, 4011190502, 3776767469, 4077384432, 4245618683,
          2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
          2438237621, 2203032232, 2370213795,
        ],
        ex = [
          0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
          824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
          2135319889, 1649704518, 1767536459, 2967507152, 3152976349,
          2801566410, 2918353863, 2631447780, 2547432937, 2328143614,
          2177544179, 3901806776, 3818836405, 4270639778, 4118987695,
          3299409036, 3483825537, 3535072918, 3652904859, 2077965243,
          1893020342, 1841768865, 1724457132, 1474502543, 1559041666,
          1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372,
          261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454,
          3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
          4195456072, 2471224067, 2554718734, 2237133081, 2388260884,
          3212035895, 3028143674, 2842678573, 2724322336, 4138563181,
          4255350624, 3769721975, 3955191162, 3667219033, 3516619604,
          3431546947, 3347532110, 2933734917, 2782082824, 3099667487,
          3016697106, 2196052529, 2313884476, 2499348523, 2683765030,
          1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
          1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
          53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
          2256028891, 2607439820, 2422494913, 2706270690, 2856345839,
          3075636216, 3160175349, 3573941694, 3725069491, 3273267108,
          3356761769, 4181598602, 4063242375, 4011996048, 3828103837,
          1033297158, 915985419, 730517276, 545572369, 296679730, 446754879,
          129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177,
          1239331162, 1120974935, 1606591296, 1422699085, 4148292826,
          4233094615, 3781033664, 3931371469, 3682191598, 3497509347,
          3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
          2988687269, 2198438022, 2282195339, 2501218972, 2652609425,
          1201765386, 1286567175, 1371368976, 1521706781, 1805211710,
          1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672,
          46346101, 870912086, 954669403, 636813900, 788204353, 2358957921,
          2274680428, 2592523643, 2441661558, 2695033685, 2880240216,
          3065962831, 3182487618, 3572145929, 3756299780, 3270937875,
          3388507166, 4174560061, 4091327024, 4006521127, 3854606378,
          1014646705, 930369212, 711349675, 560487590, 272786309, 457992840,
          106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326,
          1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114,
          401639597, 486441376, 768917123, 651868046, 1003007129, 818324884,
          1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
          2125135846, 1673061617, 1756818940, 2970356327, 3120694122,
          2802849917, 2887651696, 2637442643, 2520393566, 2334669897,
          2149987652, 3917234703, 3799141122, 4284502037, 4100872472,
          3309594171, 3460984630, 3545789473, 3629546796, 2050466060,
          1899603969, 1814803222, 1730525723, 1443857720, 1560382517,
          1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235,
          243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545,
          3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
          4227665663, 2460449204, 2578018489, 2226875310, 2411029155,
          3198115200, 3046200461, 2827177882, 2743944855,
        ],
        e$ = [
          0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
          590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
          1367295589, 1180849278, 1265195639, 3501252752, 3720081049,
          3399941250, 3350065803, 3835484340, 3919042237, 4270507174,
          4085369519, 3102249176, 3051593425, 2734591178, 2952102595,
          2361698556, 2177869557, 2530391278, 2614737639, 3145456443,
          3060847922, 2708326185, 2892417312, 2404901663, 2187128086,
          2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
          3292445032, 3876557655, 3926170974, 4246310725, 4027744588,
          1808481195, 1723872674, 1910319033, 2094410160, 1608975247,
          1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201,
          344873464, 935293895, 984907214, 766078933, 547512796, 1844882806,
          1627235199, 2011214180, 2062270317, 1507497298, 1423022939,
          1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861,
          830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679,
          2807058932, 2858115069, 2305455554, 2220981195, 2474404304,
          2658625497, 3575528878, 3625268135, 3473416636, 3254988725,
          3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
          3683022916, 3432737375, 3247465558, 3802222185, 4020912224,
          4172763771, 4122762354, 3201631749, 3017672716, 2764249623,
          2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613,
          188127444, 472615631, 287343814, 840019705, 1058709744, 671593195,
          621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577,
          1463996600, 1080017571, 1297403050, 3673637356, 3623636965,
          3235995134, 3454686199, 4007360968, 3822090177, 4107101658,
          4190530515, 2997825956, 3215212461, 2830708150, 2779915199,
          2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165,
          273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755,
          1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
          1530455833, 1277555970, 1093597963, 1636604631, 1820824798,
          2073724613, 1989249228, 1436590835, 1487645946, 1337376481,
          1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051,
          821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645,
          2787207260, 2232435299, 2283490410, 2667994737, 2450346104,
          3647212047, 3564045318, 3279033885, 3464042516, 3980931627,
          3762502690, 4150144569, 4199882800, 3070356634, 3121275539,
          2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
          2486224549, 3747192018, 3528626907, 3310321856, 3359936201,
          3950355702, 3867060991, 4049844452, 4234721005, 1739656202,
          1790575107, 2108100632, 1890328081, 1402811438, 1586903591,
          1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217,
          1002783846, 919489135, 567498868, 752375421, 209336225, 24197544,
          376187827, 459744698, 945164165, 895287692, 574624663, 793451934,
          1679968233, 1764313568, 2117360635, 1933530610, 1343127501,
          1560637892, 1243112415, 1192455638, 3704280881, 3519142200,
          3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
          4294704398, 3029510009, 3113855344, 2927934315, 2744104290,
          2159976285, 2377486676, 2594734927, 2544078150,
        ],
        eK = [
          0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
          1059270954, 1214797936, 1097159550, 1517440620, 1400849762,
          1817998408, 1699839814, 2118541908, 2001430874, 2429595872,
          2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
          2801699524, 2951971274, 3635996816, 3518358430, 3399679628,
          3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
          1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
          227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
          1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
          2724642869, 3111247143, 2960971305, 2405426947, 2253581325,
          2638606623, 2487810577, 3808662347, 3926825029, 4044981591,
          4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
          1986918061, 2137062819, 1685577905, 1836772287, 1381620373,
          1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417,
          621982671, 439452389, 322734571, 137073913, 19308535, 3871163981,
          4021308739, 4104605777, 4255800159, 3263785589, 3414450555,
          3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
          3049390895, 2330014213, 2213296395, 2566595609, 2448830231,
          1305906550, 1155237496, 1607244650, 1455525988, 1776460110,
          1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818,
          514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718,
          3557504664, 3474729866, 3323011204, 4180808110, 4030667424,
          3945269170, 3794078908, 2507040230, 2623762152, 2272556026,
          2390325492, 2975484382, 3092726480, 2738905026, 2857194700,
          3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
          3252932727, 3673476453, 3556361835, 2763173681, 2915017791,
          3064510765, 3215307299, 2156299017, 2307622919, 2459735317,
          2610011675, 2081048481, 1963412655, 1846563261, 1729977011,
          1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015,
          645401037, 796197571, 274084841, 425408743, 38544885, 188821243,
          3613494426, 3731654548, 3313212038, 3430322568, 4082475170,
          4200115116, 3780097726, 3896688048, 2668221674, 2516901860,
          2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
          2687165888, 1202797690, 1320957812, 1437280870, 1554391400,
          1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348,
          499347990, 349075736, 736970802, 585122620, 972512814, 821712160,
          2595684844, 2478443234, 2293045232, 2174754046, 3196267988,
          3079546586, 2895723464, 2777952454, 3537852828, 3687994002,
          3234156416, 3385345166, 4142626212, 4293295786, 3841024952,
          3992742070, 174567692, 57326082, 410887952, 292596766, 777231668,
          660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912,
          1494807662, 1715193156, 1865862730, 1948373848, 2100090966,
          2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
          2352307457, 2535604243, 2653899549, 3915653703, 3764988233,
          4219352155, 4067639125, 3444575871, 3294430577, 3746175075,
          3594982253, 836553431, 953270745, 600235211, 718002117, 367585007,
          484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355,
          1654886325, 1568718495, 1418573201, 1335535747, 1184342925,
        ];
      function eB(e) {
        let t = [];
        for (let r = 0; r < e.length; r += 4)
          t.push((e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]);
        return t;
      }
      class eG {
        get key() {
          return eN(this, n, "f").slice();
        }
        constructor(e) {
          let t;
          if (
            (n.set(this, void 0),
            i.set(this, void 0),
            s.set(this, void 0),
            !(this instanceof eG))
          )
            throw Error("AES must be instanitated with `new`");
          eR(this, n, new Uint8Array(e), "f");
          let r = ev[this.key.length];
          if (null == r)
            throw TypeError("invalid key size (must be 16, 24 or 32 bytes)");
          eR(this, s, [], "f"), eR(this, i, [], "f");
          for (let e = 0; e <= r; e++)
            eN(this, s, "f").push([0, 0, 0, 0]),
              eN(this, i, "f").push([0, 0, 0, 0]);
          let a = (r + 1) * 4,
            o = this.key.length / 4,
            l = eB(this.key);
          for (let e = 0; e < o; e++)
            (t = e >> 2),
              (eN(this, s, "f")[t][e % 4] = l[e]),
              (eN(this, i, "f")[r - t][e % 4] = l[e]);
          let d = 0,
            h = o,
            u;
          for (; h < a; ) {
            if (
              ((u = l[o - 1]),
              (l[0] ^=
                (eO[(u >> 16) & 255] << 24) ^
                (eO[(u >> 8) & 255] << 16) ^
                (eO[255 & u] << 8) ^
                eO[(u >> 24) & 255] ^
                (eT[d] << 24)),
              (d += 1),
              8 != o)
            )
              for (let e = 1; e < o; e++) l[e] ^= l[e - 1];
            else {
              for (let e = 1; e < o / 2; e++) l[e] ^= l[e - 1];
              (u = l[o / 2 - 1]),
                (l[o / 2] ^=
                  eO[255 & u] ^
                  (eO[(u >> 8) & 255] << 8) ^
                  (eO[(u >> 16) & 255] << 16) ^
                  (eO[(u >> 24) & 255] << 24));
              for (let e = o / 2 + 1; e < o; e++) l[e] ^= l[e - 1];
            }
            let e = 0,
              t,
              n;
            for (; e < o && h < a; )
              (t = h >> 2),
                (n = h % 4),
                (eN(this, s, "f")[t][n] = l[e]),
                (eN(this, i, "f")[r - t][n] = l[e++]),
                h++;
          }
          for (let e = 1; e < r; e++)
            for (let t = 0; t < 4; t++)
              (u = eN(this, i, "f")[e][t]),
                (eN(this, i, "f")[e][t] =
                  eM[(u >> 24) & 255] ^
                  ex[(u >> 16) & 255] ^
                  e$[(u >> 8) & 255] ^
                  eK[255 & u]);
        }
        encrypt(e) {
          if (16 != e.length)
            throw TypeError("invalid plaintext size (must be 16 bytes)");
          let t = eN(this, s, "f").length - 1,
            r = [0, 0, 0, 0],
            n = eB(e);
          for (let e = 0; e < 4; e++) n[e] ^= eN(this, s, "f")[0][e];
          for (let e = 1; e < t; e++) {
            for (let t = 0; t < 4; t++)
              r[t] =
                eb[(n[t] >> 24) & 255] ^
                eC[(n[(t + 1) % 4] >> 16) & 255] ^
                ek[(n[(t + 2) % 4] >> 8) & 255] ^
                eS[255 & n[(t + 3) % 4]] ^
                eN(this, s, "f")[e][t];
            n = r.slice();
          }
          let i = new Uint8Array(16),
            a = 0;
          for (let e = 0; e < 4; e++)
            (a = eN(this, s, "f")[t][e]),
              (i[4 * e] = (eO[(n[e] >> 24) & 255] ^ (a >> 24)) & 255),
              (i[4 * e + 1] =
                (eO[(n[(e + 1) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
              (i[4 * e + 2] =
                (eO[(n[(e + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
              (i[4 * e + 3] = (eO[255 & n[(e + 3) % 4]] ^ a) & 255);
          return i;
        }
        decrypt(e) {
          if (16 != e.length)
            throw TypeError("invalid ciphertext size (must be 16 bytes)");
          let t = eN(this, i, "f").length - 1,
            r = [0, 0, 0, 0],
            n = eB(e);
          for (let e = 0; e < 4; e++) n[e] ^= eN(this, i, "f")[0][e];
          for (let e = 1; e < t; e++) {
            for (let t = 0; t < 4; t++)
              r[t] =
                eP[(n[t] >> 24) & 255] ^
                eU[(n[(t + 3) % 4] >> 16) & 255] ^
                eD[(n[(t + 2) % 4] >> 8) & 255] ^
                eL[255 & n[(t + 1) % 4]] ^
                eN(this, i, "f")[e][t];
            n = r.slice();
          }
          let s = new Uint8Array(16),
            a = 0;
          for (let e = 0; e < 4; e++)
            (a = eN(this, i, "f")[t][e]),
              (s[4 * e] = (eI[(n[e] >> 24) & 255] ^ (a >> 24)) & 255),
              (s[4 * e + 1] =
                (eI[(n[(e + 3) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
              (s[4 * e + 2] =
                (eI[(n[(e + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
              (s[4 * e + 3] = (eI[255 & n[(e + 1) % 4]] ^ a) & 255);
          return s;
        }
      }
      (n = new WeakMap()), (i = new WeakMap()), (s = new WeakMap());
      class e_ {
        constructor(e, t, r) {
          if (r && !(this instanceof r))
            throw Error(`${e} must be instantiated with "new"`);
          Object.defineProperties(this, {
            aes: { enumerable: !0, value: new eG(t) },
            name: { enumerable: !0, value: e },
          });
        }
      }
      var eF = function (e, t, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        },
        eW = function (e, t, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
        };
      class eV extends e_ {
        constructor(e, t) {
          if (
            (super("ECC", e, eV), a.set(this, void 0), o.set(this, void 0), t)
          ) {
            if (t.length % 16)
              throw TypeError("invalid iv size (must be 16 bytes)");
            eF(this, a, new Uint8Array(t), "f");
          } else eF(this, a, new Uint8Array(16), "f");
          eF(this, o, this.iv, "f");
        }
        get iv() {
          return new Uint8Array(eW(this, a, "f"));
        }
        encrypt(e) {
          if (e.length % 16)
            throw TypeError(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          let t = new Uint8Array(e.length);
          for (let r = 0; r < e.length; r += 16) {
            for (let t = 0; t < 16; t++) eW(this, o, "f")[t] ^= e[r + t];
            eF(this, o, this.aes.encrypt(eW(this, o, "f")), "f"),
              t.set(eW(this, o, "f"), r);
          }
          return t;
        }
        decrypt(e) {
          if (e.length % 16)
            throw TypeError(
              "invalid ciphertext size (must be multiple of 16 bytes)"
            );
          let t = new Uint8Array(e.length);
          for (let r = 0; r < e.length; r += 16) {
            let n = this.aes.decrypt(e.subarray(r, r + 16));
            for (let i = 0; i < 16; i++)
              (t[r + i] = n[i] ^ eW(this, o, "f")[i]),
                (eW(this, o, "f")[i] = e[r + i]);
          }
          return t;
        }
      }
      (a = new WeakMap()),
        (o = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakSet();
      var ez = function (e, t, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        },
        eY = function (e, t, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
        };
      class eJ extends e_ {
        constructor(e, t) {
          super("CTR", e, eJ),
            l.set(this, void 0),
            d.set(this, void 0),
            h.set(this, void 0),
            ez(this, h, new Uint8Array(16), "f"),
            eY(this, h, "f").fill(0),
            ez(this, l, eY(this, h, "f"), "f"),
            ez(this, d, 16, "f"),
            null == t && (t = 1),
            "number" == typeof t
              ? this.setCounterValue(t)
              : this.setCounterBytes(t);
        }
        get counter() {
          return new Uint8Array(eY(this, h, "f"));
        }
        setCounterValue(e) {
          if (!Number.isInteger(e) || e < 0 || e > Number.MAX_SAFE_INTEGER)
            throw TypeError("invalid counter initial integer value");
          for (let t = 15; t >= 0; --t)
            (eY(this, h, "f")[t] = e % 256), (e = Math.floor(e / 256));
        }
        setCounterBytes(e) {
          if (16 !== e.length)
            throw TypeError("invalid counter initial Uint8Array value length");
          eY(this, h, "f").set(e);
        }
        increment() {
          for (let e = 15; e >= 0; e--)
            if (255 === eY(this, h, "f")[e]) eY(this, h, "f")[e] = 0;
            else {
              eY(this, h, "f")[e]++;
              break;
            }
        }
        encrypt(e) {
          var t, r;
          let n = new Uint8Array(e);
          for (let e = 0; e < n.length; e++)
            16 === eY(this, d, "f") &&
              (ez(this, l, this.aes.encrypt(eY(this, h, "f")), "f"),
              ez(this, d, 0, "f"),
              this.increment()),
              (n[e] ^= eY(this, l, "f")[
                (ez(this, d, ((r = eY(this, d, "f")), (t = r++), r), "f"), t)
              ]);
          return n;
        }
        decrypt(e) {
          return this.encrypt(e);
        }
      }
      (l = new WeakMap()),
        (d = new WeakMap()),
        (h = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var ej = r(65376),
        eH = r(65530),
        eX = r(70029);
      let eZ = (e, t) => (e << t) | (e >>> (32 - t));
      function eq(e, t, r, n, i, s) {
        let a = e[t++] ^ r[n++],
          o = e[t++] ^ r[n++],
          l = e[t++] ^ r[n++],
          d = e[t++] ^ r[n++],
          h = e[t++] ^ r[n++],
          u = e[t++] ^ r[n++],
          c = e[t++] ^ r[n++],
          p = e[t++] ^ r[n++],
          f = e[t++] ^ r[n++],
          y = e[t++] ^ r[n++],
          m = e[t++] ^ r[n++],
          g = e[t++] ^ r[n++],
          w = e[t++] ^ r[n++],
          A = e[t++] ^ r[n++],
          E = e[t++] ^ r[n++],
          N = e[t++] ^ r[n++],
          R = a,
          v = o,
          T = l,
          O = d,
          I = h,
          b = u,
          C = c,
          k = p,
          S = f,
          P = y,
          U = m,
          D = g,
          L = w,
          M = A,
          x = E,
          $ = N;
        for (let e = 0; e < 8; e += 2)
          (I ^= eZ((R + L) | 0, 7)),
            (S ^= eZ((I + R) | 0, 9)),
            (L ^= eZ((S + I) | 0, 13)),
            (R ^= eZ((L + S) | 0, 18)),
            (P ^= eZ((b + v) | 0, 7)),
            (M ^= eZ((P + b) | 0, 9)),
            (v ^= eZ((M + P) | 0, 13)),
            (b ^= eZ((v + M) | 0, 18)),
            (x ^= eZ((U + C) | 0, 7)),
            (T ^= eZ((x + U) | 0, 9)),
            (C ^= eZ((T + x) | 0, 13)),
            (U ^= eZ((C + T) | 0, 18)),
            (O ^= eZ(($ + D) | 0, 7)),
            (k ^= eZ((O + $) | 0, 9)),
            (D ^= eZ((k + O) | 0, 13)),
            ($ ^= eZ((D + k) | 0, 18)),
            (v ^= eZ((R + O) | 0, 7)),
            (T ^= eZ((v + R) | 0, 9)),
            (O ^= eZ((T + v) | 0, 13)),
            (R ^= eZ((O + T) | 0, 18)),
            (C ^= eZ((b + I) | 0, 7)),
            (k ^= eZ((C + b) | 0, 9)),
            (I ^= eZ((k + C) | 0, 13)),
            (b ^= eZ((I + k) | 0, 18)),
            (D ^= eZ((U + P) | 0, 7)),
            (S ^= eZ((D + U) | 0, 9)),
            (P ^= eZ((S + D) | 0, 13)),
            (U ^= eZ((P + S) | 0, 18)),
            (L ^= eZ(($ + x) | 0, 7)),
            (M ^= eZ((L + $) | 0, 9)),
            (x ^= eZ((M + L) | 0, 13)),
            ($ ^= eZ((x + M) | 0, 18));
        (i[s++] = (a + R) | 0),
          (i[s++] = (o + v) | 0),
          (i[s++] = (l + T) | 0),
          (i[s++] = (d + O) | 0),
          (i[s++] = (h + I) | 0),
          (i[s++] = (u + b) | 0),
          (i[s++] = (c + C) | 0),
          (i[s++] = (p + k) | 0),
          (i[s++] = (f + S) | 0),
          (i[s++] = (y + P) | 0),
          (i[s++] = (m + U) | 0),
          (i[s++] = (g + D) | 0),
          (i[s++] = (w + L) | 0),
          (i[s++] = (A + M) | 0),
          (i[s++] = (E + x) | 0),
          (i[s++] = (N + $) | 0);
      }
      function eQ(e, t, r, n, i) {
        let s = n + 0,
          a = n + 16 * i;
        for (let n = 0; n < 16; n++) r[a + n] = e[t + (2 * i - 1) * 16 + n];
        for (let n = 0; n < i; n++, s += 16, t += 16)
          eq(r, a, e, t, r, s),
            n > 0 && (a += 16),
            eq(r, s, e, (t += 16), r, a);
      }
      function e1(e, t, r) {
        let {
          N: n,
          r: i,
          p: s,
          dkLen: a,
          asyncTick: o,
          maxmem: l,
          onProgress: d,
        } = (0, U.U5)({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, r);
        if (
          ((0, ej.Rx)(n),
          (0, ej.Rx)(i),
          (0, ej.Rx)(s),
          (0, ej.Rx)(a),
          (0, ej.Rx)(o),
          (0, ej.Rx)(l),
          void 0 !== d && "function" != typeof d)
        )
          throw Error("progressCb should be function");
        let h = 128 * i,
          u = h / 4;
        if (n <= 1 || (n & (n - 1)) != 0 || n >= 2 ** (h / 8) || n > 4294967296)
          throw Error(
            "Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32"
          );
        if (s < 0 || s > ((4294967296 - 1) * 32) / h)
          throw Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)"
          );
        if (a < 0 || a > (4294967296 - 1) * 32)
          throw Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32"
          );
        let c = h * (n + s);
        if (c > l)
          throw Error(
            `Scrypt: parameters too large, ${c} (128 * r * (N + p)) > ${l} (maxmem)`
          );
        let p = (0, eX.n)(eH.J, e, t, { c: 1, dkLen: h * s }),
          f = (0, U.Jq)(p),
          y = (0, U.Jq)(new Uint8Array(h * n)),
          m = (0, U.Jq)(new Uint8Array(h)),
          g = () => {};
        if (d) {
          let e = 2 * n * s,
            t = Math.max(Math.floor(e / 1e4), 1),
            r = 0;
          g = () => {
            r++, d && (!(r % t) || r === e) && d(r / e);
          };
        }
        return {
          N: n,
          r: i,
          p: s,
          dkLen: a,
          blockSize32: u,
          V: y,
          B32: f,
          B: p,
          tmp: m,
          blockMixCb: g,
          asyncTick: o,
        };
      }
      function e2(e, t, r, n, i) {
        let s = (0, eX.n)(eH.J, e, r, { c: 1, dkLen: t });
        return r.fill(0), n.fill(0), i.fill(0), s;
      }
      async function e3(e, t, r) {
        let {
          N: n,
          r: i,
          p: s,
          dkLen: a,
          blockSize32: o,
          V: l,
          B32: d,
          B: h,
          tmp: u,
          blockMixCb: c,
          asyncTick: p,
        } = e1(e, t, r);
        for (let e = 0; e < s; e++) {
          let t = o * e;
          for (let e = 0; e < o; e++) l[e] = d[t + e];
          let r = 0;
          await (0, U.oY)(n - 1, p, () => {
            eQ(l, r, l, (r += o), i), c();
          }),
            eQ(l, (n - 1) * o, d, t, i),
            c(),
            await (0, U.oY)(n, p, () => {
              let e = d[t + o - 16] % n;
              for (let r = 0; r < o; r++) u[r] = d[t + r] ^ l[e * o + r];
              eQ(u, 0, d, t, i), c();
            });
        }
        return e2(e, a, h, l, u);
      }
      let e0 = !1,
        e4 = !1,
        e5 = async function (e, t, r, n, i, s, a) {
          return await e3(e, t, { N: r, r: n, p: i, dkLen: s, onProgress: a });
        },
        e7 = function (e, t, r, n, i, s) {
          return (function (e, t, r) {
            let {
              N: n,
              r: i,
              p: s,
              dkLen: a,
              blockSize32: o,
              V: l,
              B32: d,
              B: h,
              tmp: u,
              blockMixCb: c,
            } = e1(e, t, r);
            for (let e = 0; e < s; e++) {
              let t = o * e;
              for (let e = 0; e < o; e++) l[e] = d[t + e];
              for (let e = 0, t = 0; e < n - 1; e++)
                eQ(l, t, l, (t += o), i), c();
              eQ(l, (n - 1) * o, d, t, i), c();
              for (let e = 0; e < n; e++) {
                let e = d[t + o - 16] % n;
                for (let r = 0; r < o; r++) u[r] = d[t + r] ^ l[e * o + r];
                eQ(u, 0, d, t, i), c();
              }
            }
            return e2(e, a, h, l, u);
          })(e, t, { N: r, r: n, p: i, dkLen: s });
        },
        e6 = e5,
        e8 = e7;
      async function e9(e, t, r, n, i, s, a) {
        let o = (0, g.Pw)(e, "passwd"),
          l = (0, g.Pw)(t, "salt");
        return (0, g.Dv)(await e6(o, l, r, n, i, s, a));
      }
      function te(e, t, r, n, i, s) {
        let a = (0, g.Pw)(e, "passwd"),
          o = (0, g.Pw)(t, "salt");
        return (0, g.Dv)(e8(a, o, r, n, i, s));
      }
      function tt(e) {
        return (
          "string" != typeof e || e.startsWith("0x") || (e = "0x" + e),
          (0, g.h_)(e)
        );
      }
      function tr(e, t) {
        for (e = String(e); e.length < t; ) e = "0" + e;
        return e;
      }
      function tn(e) {
        return "string" == typeof e ? (0, m.Y0)(e, "NFKC") : (0, g.h_)(e);
      }
      function ti(e, t) {
        let r = t.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
        (0, c.en)(null != r, "invalid path", "path", t);
        let n = r[1],
          i = r[3],
          s = "!" === r[4],
          a = e;
        for (let e of n.toLowerCase().split(".")) {
          if (Array.isArray(a)) {
            if (!e.match(/^[0-9]+$/)) break;
            a = a[parseInt(e)];
          } else if ("object" == typeof a) {
            let t = null;
            for (let r in a)
              if (r.toLowerCase() === e) {
                t = a[r];
                break;
              }
            a = t;
          } else a = null;
          if (null == a) break;
        }
        if (
          ((0, c.en)(!s || null != a, "missing required value", "path", n),
          i && null != a)
        ) {
          if ("int" === i) {
            if ("string" == typeof a && a.match(/^-?[0-9]+$/))
              return parseInt(a);
            if (Number.isSafeInteger(a)) return a;
          }
          if ("number" === i && "string" == typeof a && a.match(/^-?[0-9.]*$/))
            return parseFloat(a);
          if ("data" === i && "string" == typeof a) return tt(a);
          if (("array" === i && Array.isArray(a)) || i === typeof a) return a;
          (0, c.en)(!1, `wrong type found for ${i} `, "path", n);
        }
        return a;
      }
      (e9._ = e5),
        (e9.lock = function () {
          e4 = !0;
        }),
        (e9.register = function (e) {
          if (e4) throw Error("scrypt is locked");
          e6 = e;
        }),
        Object.freeze(e9),
        (te._ = e7),
        (te.lock = function () {
          e0 = !0;
        }),
        (te.register = function (e) {
          if (e0) throw Error("scryptSync is locked");
          e8 = e;
        }),
        Object.freeze(te);
      var ts = r(47289);
      let ta = "m/44'/60'/0'/0/0";
      function to(e) {
        try {
          let t = JSON.parse(e),
            r = null != t.version ? parseInt(t.version) : 0;
          if (3 === r) return !0;
        } catch (e) {}
        return !1;
      }
      function tl(e, t) {
        let r = (0, g.Pw)(t),
          n = ti(e, "crypto.ciphertext:data!"),
          i = (0, g.Dv)((0, y.w)((0, g.zo)([r.slice(16, 32), n]))).substring(2);
        (0, c.en)(
          i === ti(e, "crypto.mac:string!").toLowerCase(),
          "incorrect password",
          "password",
          "[ REDACTED ]"
        );
        let s = (function (e, t, r) {
            if ("aes-128-ctr" === ti(e, "crypto.cipher:string")) {
              let n = new eJ(t, ti(e, "crypto.cipherparams.iv:data!"));
              return (0, g.Dv)(n.decrypt(r));
            }
            (0, c.hu)(!1, "unsupported cipher", "UNSUPPORTED_OPERATION", {
              operation: "decrypt",
            });
          })(e, r.slice(0, 16), n),
          a = (0, N.d)(s);
        if (e.address) {
          let t = e.address.toLowerCase();
          t.startsWith("0x") || (t = "0x" + t),
            (0, c.en)(
              (0, f.K)(t) === a,
              "keystore address/privateKey mismatch",
              "address",
              e.address
            );
        }
        let o = { address: a, privateKey: s };
        if ("0.1" === ti(e, "x-ethers.version:string")) {
          let t = r.slice(32, 64),
            n = ti(e, "x-ethers.mnemonicCiphertext:data!"),
            i = new eJ(t, ti(e, "x-ethers.mnemonicCounter:data!"));
          o.mnemonic = {
            path: ti(e, "x-ethers.path:string") || ta,
            locale: ti(e, "x-ethers.locale:string") || "en",
            entropy: (0, g.Dv)((0, g.Pw)(i.decrypt(n))),
          };
        }
        return o;
      }
      function td(e) {
        let t = ti(e, "crypto.kdf:string");
        if (t && "string" == typeof t) {
          if ("scrypt" === t.toLowerCase()) {
            let r = ti(e, "crypto.kdfparams.salt:data!"),
              n = ti(e, "crypto.kdfparams.n:int!"),
              i = ti(e, "crypto.kdfparams.r:int!"),
              s = ti(e, "crypto.kdfparams.p:int!");
            (0, c.en)(n > 0 && (n & (n - 1)) == 0, "invalid kdf.N", "kdf.N", n),
              (0, c.en)(i > 0 && s > 0, "invalid kdf", "kdf", t);
            let a = ti(e, "crypto.kdfparams.dklen:int!");
            return (
              (0, c.en)(32 === a, "invalid kdf.dklen", "kdf.dflen", a),
              { name: "scrypt", salt: r, N: n, r: i, p: s, dkLen: 64 }
            );
          }
          if ("pbkdf2" === t.toLowerCase()) {
            let t = ti(e, "crypto.kdfparams.salt:data!"),
              r = ti(e, "crypto.kdfparams.prf:string!"),
              n = r.split("-").pop();
            (0, c.en)(
              "sha256" === n || "sha512" === n,
              "invalid kdf.pdf",
              "kdf.pdf",
              r
            );
            let i = ti(e, "crypto.kdfparams.c:int!"),
              s = ti(e, "crypto.kdfparams.dklen:int!");
            return (
              (0, c.en)(32 === s, "invalid kdf.dklen", "kdf.dklen", s),
              { name: "pbkdf2", salt: t, count: i, dkLen: s, algorithm: n }
            );
          }
        }
        (0, c.en)(!1, "unsupported key-derivation function", "kdf", t);
      }
      function th(e) {
        return new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        });
      }
      async function tu(e, t, r) {
        let n = JSON.parse(e),
          i = tn(t),
          s = td(n);
        if ("pbkdf2" === s.name) {
          r && (r(0), await th(0));
          let { salt: e, count: t, dkLen: a, algorithm: o } = s,
            l = ey(i, e, t, a, o);
          return r && (r(1), await th(0)), tl(n, l);
        }
        (0, c.hu)("scrypt" === s.name, "cannot be reached", "UNKNOWN_ERROR", {
          params: s,
        });
        let { salt: a, N: o, r: l, p: d, dkLen: h } = s;
        return tl(n, await e9(i, a, o, l, d, h, r));
      }
      function tc(e) {
        let t = null != e.salt ? (0, g.Pw)(e.salt, "options.salt") : et(32),
          r = 131072,
          n = 8,
          i = 1;
        return (
          e.scrypt &&
            (e.scrypt.N && (r = e.scrypt.N),
            e.scrypt.r && (n = e.scrypt.r),
            e.scrypt.p && (i = e.scrypt.p)),
          (0, c.en)(
            "number" == typeof r &&
              r > 0 &&
              Number.isSafeInteger(r) &&
              (BigInt(r) & BigInt(r - 1)) === BigInt(0),
            "invalid scrypt N parameter",
            "options.N",
            r
          ),
          (0, c.en)(
            "number" == typeof n && n > 0 && Number.isSafeInteger(n),
            "invalid scrypt r parameter",
            "options.r",
            n
          ),
          (0, c.en)(
            "number" == typeof i && i > 0 && Number.isSafeInteger(i),
            "invalid scrypt p parameter",
            "options.p",
            i
          ),
          { name: "scrypt", dkLen: 32, salt: t, N: r, r: n, p: i }
        );
      }
      function tp(e, t, r, n) {
        let i = (0, g.Pw)(r.privateKey, "privateKey"),
          s = null != n.iv ? (0, g.Pw)(n.iv, "options.iv") : et(16);
        (0, c.en)(
          16 === s.length,
          "invalid options.iv length",
          "options.iv",
          n.iv
        );
        let a = null != n.uuid ? (0, g.Pw)(n.uuid, "options.uuid") : et(16);
        (0, c.en)(
          16 === a.length,
          "invalid options.uuid length",
          "options.uuid",
          n.iv
        );
        let o = e.slice(0, 16),
          l = e.slice(16, 32),
          d = new eJ(o, s),
          h = (0, g.Pw)(d.encrypt(i)),
          u = (0, y.w)((0, g.zo)([l, h])),
          p = {
            address: r.address.substring(2).toLowerCase(),
            id: (function (e) {
              let t = (0, g.Pw)(e, "randomBytes");
              (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128);
              let r = (0, g.Dv)(t);
              return [
                r.substring(2, 10),
                r.substring(10, 14),
                r.substring(14, 18),
                r.substring(18, 22),
                r.substring(22, 34),
              ].join("-");
            })(a),
            version: 3,
            Crypto: {
              cipher: "aes-128-ctr",
              cipherparams: { iv: (0, g.Dv)(s).substring(2) },
              ciphertext: (0, g.Dv)(h).substring(2),
              kdf: "scrypt",
              kdfparams: {
                salt: (0, g.Dv)(t.salt).substring(2),
                n: t.N,
                dklen: 32,
                p: t.p,
                r: t.r,
              },
              mac: u.substring(2),
            },
          };
        if (r.mnemonic) {
          let t = null != n.client ? n.client : `ethers/${ts.i}`,
            i = r.mnemonic.path || ta,
            s = r.mnemonic.locale || "en",
            a = e.slice(32, 64),
            o = (0, g.Pw)(r.mnemonic.entropy, "account.mnemonic.entropy"),
            l = et(16),
            d = new eJ(a, l),
            h = (0, g.Pw)(d.encrypt(o)),
            u = new Date(),
            c =
              "UTC--" +
              (u.getUTCFullYear() +
                "-" +
                tr(u.getUTCMonth() + 1, 2) +
                "-" +
                tr(u.getUTCDate(), 2) +
                "T" +
                tr(u.getUTCHours(), 2) +
                "-" +
                tr(u.getUTCMinutes(), 2) +
                "-") +
              tr(u.getUTCSeconds(), 2) +
              ".0Z--" +
              p.address;
          p["x-ethers"] = {
            client: t,
            gethFilename: c,
            path: i,
            locale: s,
            mnemonicCounter: (0, g.Dv)(l).substring(2),
            mnemonicCiphertext: (0, g.Dv)(h).substring(2),
            version: "0.1",
          };
        }
        return JSON.stringify(p);
      }
      function tf(e, t, r) {
        null == r && (r = {});
        let n = tn(t),
          i = tc(r),
          s = te(n, i.salt, i.N, i.r, i.p, 64);
        return tp((0, g.Pw)(s), i, e, r);
      }
      async function ty(e, t, r) {
        null == r && (r = {});
        let n = tn(t),
          i = tc(r),
          s = await e9(n, i.salt, i.N, i.r, i.p, 64, r.progressCallback);
        return tp((0, g.Pw)(s), i, e, r);
      }
      let tm = "m/44'/60'/0'/0/0",
        tg = new Uint8Array([
          66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100,
        ]),
        tw = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        );
      function tA(e, t) {
        let r = "";
        for (; e; )
          (r = "0123456789abcdef"[e % 16] + r), (e = Math.trunc(e / 16));
        for (; r.length < 2 * t; ) r = "0" + r;
        return "0x" + r;
      }
      function tE(e) {
        let t = (0, g.Pw)(e),
          r = (0, g.QB)((0, O.J)((0, O.J)(t)), 0, 4),
          n = (0, g.zo)([t, r]);
        return (0, er.X)(n);
      }
      let tN = {};
      function tR(e, t, r, n) {
        let i = new Uint8Array(37);
        2147483648 & e
          ? ((0, c.hu)(
              null != n,
              "cannot derive child of neutered node",
              "UNSUPPORTED_OPERATION",
              { operation: "deriveChild" }
            ),
            i.set((0, g.Pw)(n), 1))
          : i.set((0, g.Pw)(r));
        for (let t = 24; t >= 0; t -= 8)
          i[33 + (t >> 3)] = (e >> (24 - t)) & 255;
        let s = (0, g.Pw)(S("sha512", t, i));
        return { IL: s.slice(0, 32), IR: s.slice(32) };
      }
      function tv(e, t) {
        let r = t.split("/");
        (0, c.en)(r.length > 0, "invalid path", "path", t),
          "m" === r[0] &&
            ((0, c.en)(
              0 === e.depth,
              `cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth ${e.depth}`,
              "path",
              t
            ),
            r.shift());
        let n = e;
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          if (t.match(/^[0-9]+'$/)) {
            let r = parseInt(t.substring(0, t.length - 1));
            (0, c.en)(r < 2147483648, "invalid path index", `path[${e}]`, t),
              (n = n.deriveChild(2147483648 + r));
          } else if (t.match(/^[0-9]+$/)) {
            let r = parseInt(t);
            (0, c.en)(r < 2147483648, "invalid path index", `path[${e}]`, t),
              (n = n.deriveChild(r));
          } else (0, c.en)(!1, "invalid path component", `path[${e}]`, t);
        }
        return n;
      }
      class tT extends T {
        publicKey;
        fingerprint;
        parentFingerprint;
        mnemonic;
        chainCode;
        path;
        index;
        depth;
        constructor(e, t, r, n, i, s, a, o, l) {
          super(t, l),
            (0, c.NK)(e, tN, "HDNodeWallet"),
            (0, v.h)(this, { publicKey: t.compressedPublicKey });
          let d = (0, g.QB)(Z((0, O.J)(this.publicKey)), 0, 4);
          (0, v.h)(this, {
            parentFingerprint: r,
            fingerprint: d,
            chainCode: n,
            path: i,
            index: s,
            depth: a,
          }),
            (0, v.h)(this, { mnemonic: o });
        }
        connect(e) {
          return new tT(
            tN,
            this.signingKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.mnemonic,
            e
          );
        }
        #s() {
          let e = { address: this.address, privateKey: this.privateKey },
            t = this.mnemonic;
          return (
            this.path &&
              t &&
              "en" === t.wordlist.locale &&
              "" === t.password &&
              (e.mnemonic = {
                path: this.path,
                locale: "en",
                entropy: t.entropy,
              }),
            e
          );
        }
        async encrypt(e, t) {
          return await ty(this.#s(), e, { progressCallback: t });
        }
        encryptSync(e) {
          return tf(this.#s(), e);
        }
        get extendedKey() {
          return (
            (0, c.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            tE(
              (0, g.zo)([
                "0x0488ADE4",
                tA(this.depth, 1),
                this.parentFingerprint,
                tA(this.index, 4),
                this.chainCode,
                (0, g.zo)(["0x00", this.privateKey]),
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        neuter() {
          return new tO(
            tN,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.provider
          );
        }
        deriveChild(e) {
          let t = (0, en.Dx)(e, "index");
          (0, c.en)(t <= 4294967295, "invalid index", "index", t);
          let r = this.path;
          r && ((r += "/" + (2147483647 & t)), 2147483648 & t && (r += "'"));
          let { IR: n, IL: i } = tR(
            t,
            this.chainCode,
            this.publicKey,
            this.privateKey
          );
          return new tT(
            tN,
            new u.E(
              (0, en.m9)(((0, en.Gh)(i) + BigInt(this.privateKey)) % tw, 32)
            ),
            this.fingerprint,
            (0, g.Dv)(n),
            r,
            t,
            this.depth + 1,
            this.mnemonic,
            this.provider
          );
        }
        derivePath(e) {
          return tv(this, e);
        }
        static #a(e, t) {
          (0, c.en)((0, g.Zq)(e), "invalid seed", "seed", "[REDACTED]");
          let r = (0, g.Pw)(e, "seed");
          (0, c.en)(
            r.length >= 16 && r.length <= 64,
            "invalid seed",
            "seed",
            "[REDACTED]"
          );
          let n = (0, g.Pw)(S("sha512", tg, r));
          return new tT(
            tN,
            new u.E((0, g.Dv)(n.slice(0, 32))),
            "0x00000000",
            (0, g.Dv)(n.slice(32)),
            "m",
            0,
            0,
            t,
            null
          );
        }
        static fromExtendedKey(e) {
          let t = (0, en.ot)((0, er.G)(e));
          (0, c.en)(
            82 === t.length || tE(t.slice(0, 78)) === e,
            "invalid extended key",
            "extendedKey",
            "[ REDACTED ]"
          );
          let r = t[4],
            n = (0, g.Dv)(t.slice(5, 9)),
            i = parseInt((0, g.Dv)(t.slice(9, 13)).substring(2), 16),
            s = (0, g.Dv)(t.slice(13, 45)),
            a = t.slice(45, 78);
          switch ((0, g.Dv)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf": {
              let e = (0, g.Dv)(a);
              return new tO(tN, (0, N.d)(e), e, n, s, null, i, r, null);
            }
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== a[0]) break;
              return new tT(
                tN,
                new u.E(a.slice(1)),
                n,
                s,
                null,
                i,
                r,
                null,
                null
              );
          }
          (0, c.en)(
            !1,
            "invalid extended key prefix",
            "extendedKey",
            "[ REDACTED ]"
          );
        }
        static createRandom(e, t, r) {
          null == e && (e = ""),
            null == t && (t = tm),
            null == r && (r = eu.wordlist());
          let n = eE.fromEntropy(et(16), e, r);
          return tT.#a(n.computeSeed(), n).derivePath(t);
        }
        static fromMnemonic(e, t) {
          return t || (t = tm), tT.#a(e.computeSeed(), e).derivePath(t);
        }
        static fromPhrase(e, t, r, n) {
          null == t && (t = ""),
            null == r && (r = tm),
            null == n && (n = eu.wordlist());
          let i = eE.fromPhrase(e, t, n);
          return tT.#a(i.computeSeed(), i).derivePath(r);
        }
        static fromSeed(e) {
          return tT.#a(e, null);
        }
      }
      class tO extends A.b {
        publicKey;
        fingerprint;
        parentFingerprint;
        chainCode;
        path;
        index;
        depth;
        constructor(e, t, r, n, i, s, a, o, l) {
          super(t, l),
            (0, c.NK)(e, tN, "HDNodeVoidWallet"),
            (0, v.h)(this, { publicKey: r });
          let d = (0, g.QB)(Z((0, O.J)(r)), 0, 4);
          (0, v.h)(this, {
            publicKey: r,
            fingerprint: d,
            parentFingerprint: n,
            chainCode: i,
            path: s,
            index: a,
            depth: o,
          });
        }
        connect(e) {
          return new tO(
            tN,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            e
          );
        }
        get extendedKey() {
          return (
            (0, c.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            tE(
              (0, g.zo)([
                "0x0488B21E",
                tA(this.depth, 1),
                this.parentFingerprint,
                tA(this.index, 4),
                this.chainCode,
                this.publicKey,
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        deriveChild(e) {
          let t = (0, en.Dx)(e, "index");
          (0, c.en)(t <= 4294967295, "invalid index", "index", t);
          let r = this.path;
          r && ((r += "/" + (2147483647 & t)), 2147483648 & t && (r += "'"));
          let { IR: n, IL: i } = tR(t, this.chainCode, this.publicKey, null),
            s = u.E.addPoints(i, this.publicKey, !0);
          return new tO(
            tN,
            (0, N.d)(s),
            s,
            this.fingerprint,
            (0, g.Dv)(n),
            r,
            t,
            this.depth + 1,
            this.provider
          );
        }
        derivePath(e) {
          return tv(this, e);
        }
      }
      function tI(e) {
        try {
          if (JSON.parse(e).encseed) return !0;
        } catch (e) {}
        return !1;
      }
      function tb(e, t) {
        let r = JSON.parse(e),
          n = tn(t),
          i = (0, f.K)(ti(r, "ethaddr:string!")),
          s = tt(ti(r, "encseed:string!"));
        (0, c.en)(s && s.length % 16 == 0, "invalid encseed", "json", e);
        let a = (0, g.Pw)(ey(n, n, 2e3, 32, "sha256")).slice(0, 16),
          o = s.slice(0, 16),
          l = s.slice(16),
          d = new eV(a, o),
          h = (function (e) {
            if (e.length < 16) throw TypeError("PKCS#7 invalid length");
            let t = e[e.length - 1];
            if (t > 16) throw TypeError("PKCS#7 padding byte out of range");
            let r = e.length - t;
            for (let n = 0; n < t; n++)
              if (e[r + n] !== t)
                throw TypeError("PKCS#7 invalid padding byte");
            return new Uint8Array(e.subarray(0, r));
          })((0, g.Pw)(d.decrypt(l))),
          u = "";
        for (let e = 0; e < h.length; e++) u += String.fromCharCode(h[e]);
        return { address: i, privateKey: (0, ei.id)(u) };
      }
      function tC(e) {
        return new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        });
      }
      class tk extends T {
        constructor(e, t) {
          "string" != typeof e || e.startsWith("0x") || (e = "0x" + e),
            super("string" == typeof e ? new u.E(e) : e, t);
        }
        connect(e) {
          return new tk(this.signingKey, e);
        }
        async encrypt(e, t) {
          let r = { address: this.address, privateKey: this.privateKey };
          return await ty(r, e, { progressCallback: t });
        }
        encryptSync(e) {
          return tf({ address: this.address, privateKey: this.privateKey }, e);
        }
        static #o(e) {
          if (
            ((0, c.en)(e, "invalid JSON wallet", "json", "[ REDACTED ]"),
            "mnemonic" in e && e.mnemonic && "en" === e.mnemonic.locale)
          ) {
            let t = eE.fromEntropy(e.mnemonic.entropy),
              r = tT.fromMnemonic(t, e.mnemonic.path);
            if (r.address === e.address && r.privateKey === e.privateKey)
              return r;
            console.log(
              "WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key"
            );
          }
          let t = new tk(e.privateKey);
          return (
            (0, c.en)(
              t.address === e.address,
              "address/privateKey mismatch",
              "json",
              "[ REDACTED ]"
            ),
            t
          );
        }
        static async fromEncryptedJson(e, t, r) {
          let n = null;
          return (
            to(e)
              ? (n = await tu(e, t, r))
              : tI(e) &&
                (r && (r(0), await tC(0)),
                (n = tb(e, t)),
                r && (r(1), await tC(0))),
            tk.#o(n)
          );
        }
        static fromEncryptedJsonSync(e, t) {
          let r = null;
          return (
            to(e)
              ? (r = (function (e, t) {
                  let r = JSON.parse(e),
                    n = tn(t),
                    i = td(r);
                  if ("pbkdf2" === i.name) {
                    let { salt: e, count: t, dkLen: s, algorithm: a } = i;
                    return tl(r, ey(n, e, t, s, a));
                  }
                  (0, c.hu)(
                    "scrypt" === i.name,
                    "cannot be reached",
                    "UNKNOWN_ERROR",
                    { params: i }
                  );
                  let { salt: s, N: a, r: o, p: l, dkLen: d } = i;
                  return tl(r, te(n, s, a, o, l, d));
                })(e, t))
              : tI(e)
              ? (r = tb(e, t))
              : (0, c.en)(!1, "invalid JSON wallet", "json", "[ REDACTED ]"),
            tk.#o(r)
          );
        }
        static createRandom(e) {
          let t = tT.createRandom();
          return e ? t.connect(e) : t;
        }
        static fromPhrase(e, t) {
          let r = tT.fromPhrase(e);
          return t ? r.connect(t) : r;
        }
      }
    },
  },
]);
